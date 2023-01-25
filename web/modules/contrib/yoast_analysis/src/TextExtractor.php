<?php

namespace Drupal\yoast_analysis;

use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Render\RendererInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

class TextExtractor {
  protected EntityTypeManagerInterface $entityTypeManager;
  protected RendererInterface $renderer;
  protected ContainerInterface $container;

  public function __construct(EntityTypeManagerInterface $entityTypeManager, RendererInterface $renderer, ContainerInterface $container) {
    $this->entityTypeManager = $entityTypeManager;
    $this->renderer = $renderer;
    $this->container = $container;
  }

  public function getEntityHtml(EntityInterface $entity, $view_mode = 'yoast_analysis'): string {
    $build = $this->entityTypeManager
      ->getViewBuilder($entity->getEntityTypeId())
      ->view($entity, $view_mode);

    $build['#entity_type'] = $entity->getEntityTypeId();
    $build['#' . $build['#entity_type']] = $entity;

    return (string) $this->renderer->render($build);
  }

  public function getEntityMetaDescription(EntityInterface $entity): string {
    $metaDescription = '';

    if (function_exists('metatag_get_tags_from_route')) {
      $metatags = metatag_get_tags_from_route($entity);
      foreach ($metatags['#attached']['html_head'] as $tag) {
        if (isset($tag[0]['#attributes']['content'], $tag[1]) && $tag[1] === 'description') {
          return $tag[0]['#attributes']['content'];
        }
      }
    }

    return $metaDescription;
  }

}
