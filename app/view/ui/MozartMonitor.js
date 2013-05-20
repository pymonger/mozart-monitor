/*
 * File: app/view/ui/MozartMonitor.js
 * Date: Mon May 20 2013 11:19:13 GMT-0700 (PDT)
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.ui.MozartMonitor', {
    extend: 'Ext.container.Viewport',

    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    height: 500,
                    id: 'job_grid',
                    autoScroll: true,
                    title: 'Mozart Job Management',
                    store: 'MozartJsonStore',
                    region: 'north',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            id: 'job_name',
                            dataIndex: 'job_id',
                            flex: 2,
                            text: 'job name'
                        },
                        {
                            xtype: 'datecolumn',
                            id: 'queued',
                            dataIndex: 'queued',
                            flex: 1,
                            text: 'queued (UTC)',
                            format: 'Y-m-d H:i:s'
                        },
                        {
                            xtype: 'datecolumn',
                            id: 'started',
                            dataIndex: 'started',
                            flex: 1,
                            text: 'started (UTC)',
                            format: 'Y-m-d H:i:s'
                        },
                        {
                            xtype: 'datecolumn',
                            id: 'ended',
                            dataIndex: 'ended',
                            flex: 1,
                            text: 'ended (UTC)',
                            format: 'Y-m-d H:i:s'
                        },
                        {
                            xtype: 'gridcolumn',
                            id: 'parameters',
                            dataIndex: 'parameters',
                            flex: 2,
                            text: 'parameters'
                        },
                        {
                            xtype: 'gridcolumn',
                            id: 'compute_node',
                            dataIndex: 'compute_node',
                            flex: 1,
                            text: 'compute node'
                        },
                        {
                            xtype: 'gridcolumn',
                            id: 'status',
                            dataIndex: 'status',
                            flex: 1,
                            text: 'status'
                        },
                        {
                            xtype: 'numbercolumn',
                            id: 'duration',
                            dataIndex: 'duration',
                            flex: 1,
                            text: 'duration (minutes)'
                        }
                    ],
                    viewConfig: {
                        loadMask: false
                    }
                },
                {
                    xtype: 'tabpanel',
                    id: 'job_tab_panel',
                    activeTab: 0,
                    region: 'center',
                    items: [
                        {
                            xtype: 'panel',
                            id: 'job_info_tab',
                            width: 1355,
                            layout: {
                                type: 'fit'
                            },
                            title: 'Job Info',
                            items: [
                                {
                                    xtype: 'panel',
                                    cls: 'preview',
                                    id: 'job_info_panel',
                                    tpl: Ext.create('Ext.XTemplate', 
                                        '<div class="post-data">',
                                        '<span class="post-date">{queued}</span>',
                                        '<h3 class="post-title">{job_id}</h3>',
                                        '<h4 class="post-author">current status: {status}</h4>',
                                        '</div>',
                                        '<div class="post-body"><pre>{job_info}</pre></div>'
                                    )
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            id: 'context_tab',
                            layout: {
                                type: 'fit'
                            },
                            title: 'Context',
                            items: [
                                {
                                    xtype: 'panel',
                                    cls: 'preview',
                                    id: 'context_panel',
                                    tpl: Ext.create('Ext.XTemplate', 
                                        '<div class="post-data">',
                                        '<span class="post-date">{queued}</span>',
                                        '<h3 class="post-title">{job_id}</h3>',
                                        '<h4 class="post-author">current status: {status}</h4>',
                                        '</div>',
                                        '<div class="post-body">',
                                        '<style type="text/css">',
                                        '  iframe.executionFrame {',
                                        '    position: absolute;',
                                        '    width: 100%;',
                                        '    height: 100%;',
                                        '    background-color: #FFFFFF;',
                                        '    border-width: 0;',
                                        '    overflow: visible;',
                                        '  }',
                                        '</style>',
                                        '<iframe class="executionFrame" src="{context}"></iframe>',
                                        '</div>'
                                    )
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            id: 'stdout_tab',
                            layout: {
                                type: 'fit'
                            },
                            title: 'STDOUT',
                            items: [
                                {
                                    xtype: 'panel',
                                    cls: 'preview',
                                    id: 'stdout_panel',
                                    tpl: Ext.create('Ext.XTemplate', 
                                        '<div class="post-data">',
                                        '<span class="post-date">{queued}</span>',
                                        '<h3 class="post-title">{job_id}</h3>',
                                        '<h4 class="post-author">current status: {status}</h4>',
                                        '</div>',
                                        '<div class="post-body">',
                                        '<style type="text/css">',
                                        '  iframe.executionFrame {',
                                        '    position: absolute;',
                                        '    width: 100%;',
                                        '    height: 100%;',
                                        '    background-color: #FFFFFF;',
                                        '    border-width: 0;',
                                        '    overflow: visible;',
                                        '  }',
                                        '</style>',
                                        '<iframe class="executionFrame" src="{stdout}"></iframe>',
                                        '</div>'
                                    )
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            id: 'stderr_tab',
                            layout: {
                                type: 'fit'
                            },
                            title: 'STDERR',
                            items: [
                                {
                                    xtype: 'panel',
                                    cls: 'preview',
                                    id: 'stderr_panel',
                                    tpl: Ext.create('Ext.XTemplate', 
                                        '<div class="post-data">',
                                        '<span class="post-date">{queued}</span>',
                                        '<h3 class="post-title">{job_id}</h3>',
                                        '<h4 class="post-author">current status: {status}</h4>',
                                        '</div>',
                                        '<div class="post-body">',
                                        '<style type="text/css">',
                                        '  iframe.executionFrame {',
                                        '    position: absolute;',
                                        '    width: 100%;',
                                        '    height: 100%;',
                                        '    background-color: #FFFFFF;',
                                        '    border-width: 0;',
                                        '    overflow: visible;',
                                        '  }',
                                        '</style>',
                                        '<iframe class="executionFrame" src="{stderr}"></iframe>',
                                        '</div>'
                                    )
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            id: 'work_dir_tab',
                            layout: {
                                type: 'fit'
                            },
                            title: 'Work Dir',
                            items: [
                                {
                                    xtype: 'panel',
                                    cls: 'preview',
                                    id: 'work_dir_panel',
                                    tpl: Ext.create('Ext.XTemplate', 
                                        '<div class="post-data">',
                                        '<span class="post-date">{queued}</span>',
                                        '<h3 class="post-title">{job_id}</h3>',
                                        '<h4 class="post-author">current status: {status}</h4>',
                                        '</div>',
                                        '<div class="post-body">',
                                        '<style type="text/css">',
                                        '  iframe.executionFrame {',
                                        '    position: absolute;',
                                        '    width: 100%;',
                                        '    height: 100%;',
                                        '    background-color: #FFFFFF;',
                                        '    border-width: 0;',
                                        '    overflow: visible;',
                                        '  }',
                                        '</style>',
                                        '<iframe class="executionFrame" src="{work_dir}"></iframe>',
                                        '</div>'
                                    )
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});