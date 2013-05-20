/*
 * File: app/store/MozartJsonStore.js
 * Date: Sun May 19 2013 20:08:44 GMT-0700 (PDT)
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.store.MozartJsonStore', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            storeId: 'MozartJsonStore',
            proxy: {
                type: 'ajax',
                url: 'get_job_summary',
                reader: {
                    type: 'json',
                    root: 'jobs'
                }
            },
            fields: [
                {
                    name: 'job_id',
                    type: 'string'
                },
                {
                    name: 'queued',
                    type: 'date'
                },
                {
                    name: 'started',
                    type: 'date'
                },
                {
                    name: 'ended',
                    type: 'date'
                },
                {
                    name: 'parameters',
                    type: 'string'
                },
                {
                    name: 'compute_node',
                    type: 'string'
                },
                {
                    name: 'status',
                    type: 'string'
                },
                {
                    name: 'duration',
                    type: 'float'
                }
            ]
        }, cfg)]);
    }
});