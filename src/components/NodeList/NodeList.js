import React from 'react';
import { connect } from 'react-redux';
import agent from '../../agent';
import {
    USER_LIST_UNLOAD,
    USER_LIST_LOAD
} from '../../constants/actionTypes';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
});

class NodeList extends React.Component {
    constructor() {
        super();
    }


    componentWillReceiveProps(nextProps) {
    }

    componentWillMount() {
    }

    componentDidUpdate() {
        window.$('.js-basic-example').DataTable().destroy();

        window.$('.js-basic-example').DataTable({
            responsive: true,
            language: {
                "sProcessing":   "处理中...",
                "sLengthMenu":   "显示 _MENU_ 项结果",
                "sZeroRecords":  "没有匹配结果",
                "sInfo":         "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
                "sInfoEmpty":    "显示第 0 至 0 项结果，共 0 项",
                "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
                "sInfoPostFix":  "",
                "sSearch":       "搜索:",
                "sUrl":          "",
                "sEmptyTable":     "表中数据为空",
                "sLoadingRecords": "载入中...",
                "sInfoThousands":  ",",
                "oPaginate": {
                    "sFirst":    "首页",
                    "sPrevious": "上页",
                    "sNext":     "下页",
                    "sLast":     "末页"
                },
                "oAria": {
                    "sSortAscending":  ": 以升序排列此列",
                    "sSortDescending": ": 以降序排列此列"
                }
            }
        });


    }


    componentDidMount() {

    }

    componentWillUnmount() {
    }

    render() {
        let nodes;

        if (this.props.nodes) {
            console.log('props.nodes ' + this.props.nodes);

            nodes = this.props.nodes.map(node => {
                return <tr>
                    <td>{node.id}</td>
                    <td>{node.node_name}</td>
                    <td>{node.node_ip}</td>
                    <td>{node.node_port}</td>
                    <td>{node.node_key}</td>
                    <td>{node.node_encry_mode}</td>
                    <td></td>
                </tr>
            });


        } else {
            nodes = null;
        }

        return (
            <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="card">
                        <div className="header">
                            <h2>
                                节点管理
                            </h2>
                            <ul className="header-dropdown m-r--5">
                                <li className="dropdown">
                                    <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        <i className="material-icons">more_vert</i>
                                    </a>
                                    <ul className="dropdown-menu pull-right">
                                        <li><a href="javascript:void(0);">Action</a></li>
                                        <li><a href="javascript:void(0);">Another action</a></li>
                                        <li><a href="javascript:void(0);">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="body">
                            <table className="table table-bordered table-striped table-hover js-basic-example dataTable">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>节点</th>
                                    <th>IP</th>
                                    <th>端口</th>
                                    <th>秘钥</th>
                                    <th>默认加密方法</th>
                                    <th>操作</th>
                                </tr>
                                </thead>
                                <tfoot>
                                <tr>
                                    <th>ID</th>
                                    <th>节点</th>
                                    <th>IP</th>
                                    <th>端口</th>
                                    <th>秘钥</th>
                                    <th>默认加密方法</th>
                                    <th>操作</th>
                                </tr>
                                </tfoot>
                                <tbody>
                                    {nodes}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NodeList);
