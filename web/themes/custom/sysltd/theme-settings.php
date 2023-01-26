<?php

/**
 * @file
 * Functions to support Olivero theme settings.
 */

use Drupal\Core\Form\FormStateInterface;

/**
 * Implements hook_form_FORM_ID_alter() for system_theme_settings.
 */
function sysltd_form_system_theme_settings_alter(&$form, FormStateInterface $form_state) {

    $form['core'] = [
                        '#type'=>'vertical_tabs',
                        '#attributes'=>['class'=>['entity-meta']],
                        '#weight'=> -899,
                    ];


    $form['theme_settings']['#group'] = 'core';
    $form['logo']['#group'] = 'core';
    $form['favicon']['#group'] = 'core';

    $form['theme_settings']['#open'] = false;
    $form['logo']['#open'] = false;
    $form['favicon']['#open'] = false;

    $form['options'] = [
                            '#type'=>'vertical_tabs',
                            '#attributes'=>['class'=>['entity-meta']],
                            '#weight'=> -999,
                            '#default_tab'=> 'edit-variables',
                            '#states'=> [
                                        'invisible'=>[
                                            ':input[name="force_subtheme_creation"]'=>['checked'=>true]
                                        ]
                            ],
                        ];

    $form['general'] = [
        '#type'=>'details',
        '#attributes'=>[],
        '#title'=> t('Global content'),
        '#weight'=> -999,
        '#group'=> 'options',
        '#open'=> false
    ];

    $form['general']['revenue'] = [
        '#type'=>'textfield',
        '#title'=> t('Revenue'),
        '#default_value'=> theme_get_setting('revenue'),
        '#group'=> 'general'
    ];
    $form['general']['facebook'] = [
        '#type'=>'textfield',
        '#title'=> t('Facebook'),
        '#default_value'=> theme_get_setting('facebook'),
        '#group'=> 'general'
    ];

    $form['general']['twitter'] = [
        '#type'=>'textfield',
        '#title'=> t('Twitter'),
        '#default_value'=> theme_get_setting('twitter'),
        '#group'=> 'general'
    ];

    $form['general']['instagram'] = [
        '#type'=>'textfield',
        '#title'=> t('Instagram'),
        '#default_value'=> theme_get_setting('instagram'),
        '#group'=> 'general'
    ];

    $form['general']['linkedin'] = [
        '#type'=>'textfield',
        '#title'=> t('Linkedin'),
        '#default_value'=> theme_get_setting('linkedin'),
        '#group'=> 'general'
    ];


    $form['actions']['submit']['#value'] = t('Save');
}
