/*
 * File: designer.js
 * Date: Sun May 19 2013 11:05:11 GMT-0700 (PDT)
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'MyApp',

    stores: [
        'MozartJsonStore'
    ],

    launch: function() {
        Ext.QuickTips.init();

        var cmp1 = Ext.create('MyApp.view.MozartMonitor', {
            renderTo: Ext.getBody()
        });
        cmp1.show();
    }
});
