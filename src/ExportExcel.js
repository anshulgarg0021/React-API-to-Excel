import React, { Component } from 'react'  
import axios from 'axios';  
import ReactHTMLTableToExcel from 'react-html-table-to-excel';  
export class ExportExcel extends Component {  
        constructor(props) {  
                super(props)  
                this.state = {  
                        ProductData: []  
  
                }  
        }  
        componentDidMount() {  
                axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {  
                        console.log(response.data);  
                        this.setState({  
                                ProductData: response.data  
                        });  
                });  
        }  
        render() {  
                return (  
                        <div>  
                                <table id="emp" class="table">  
                                        <thead>  
                                                <tr>  
                                                        <th>Name</th>  
                                                        <th>Age</th>  
                                                        <th>Address</th>    
                                                </tr>  
                                        </thead>  
                                        <tbody>              {  
                                                this.state.ProductData.map((p, index) => {  
                                                        return <tr key={index}>  
                                                                <td >{p.id}</td>  
                                                                <td >{p.title}</td>  
                                                                <td >{p.userId}</td>   
                                                        </tr>  
                                                })  
                                        }  
  
                                        </tbody>  
  
                                </table>  
                                <div>  
                                        <ReactHTMLTableToExcel  
                                                className="btn btn-info"  
                                                table="emp"  
                                                filename="ReportExcel"  
                                                sheet="Sheet"  
                                                buttonText="Export excel" />  
                                </div>  
                        </div>  
                )  
        }  
}  
  
export default ExportExcel  