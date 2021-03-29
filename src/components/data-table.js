import React, { Component } from 'react';

class DataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.make}
                </td>
                <td>
                    {this.props.obj.model}
                </td>
                <td>
                    {this.props.obj.location}
                </td>
                <td>
                    {this.props.obj.cost}
                </td>
                <td>
                    {this.props.obj.value}
                </td>
                <td>
                    {this.props.obj.purchase_date}
                </td>
            </tr>
        );
    }
}

export default DataTable;