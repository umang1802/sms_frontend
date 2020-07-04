import React, { Component } from 'react';
import {
    DataGridContainer,
    TextFieldWrapper,
    ButtonWrapper
} from './dasboard.styles';
import DataGrid from '../dataGrid/DataGrid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { TextField, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

//maintaining a dashboard file so that code is scalable for future aspect

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            columns: [
                { title: 'id', field: 'id' },
                { title: 'Name', field: 'name', lookup: {
                    1: 'Umang',
                    2: 'Rishabh',
                    3: 'Akash'
                }},
                { title: 'Task assigned', field: 'task' },
                { title: 'Completion Status', field: 'status', lookup: {
                    1: 'Just Assigned',
                    2: 'In Analysis',
                    3: 'In Development',
                    4: 'Awaiting Deployment',
                    5: 'Ready to test',
                    6: 'defect raised',
                    7: 'done'
                } },
                {
                  title: 'Call Scedule',
                  field: 'schedule'
                },
                {
                    title: 'Remarks',
                    field: 'remarks'
                }
              ],
              data: [
                { id: 1, name: 1, task: 'FLOWBANKER ISSUES', status: 2, schedule: 'call at 2 pm', remarks: 'Solution design completed. have a call again tomorrow' },
              ],
              value: 0,
              showAddUserForm: false,
              showAddProjectForm: false,
              showAddColumnForm: false,
              userValue: '',
              showToast: false
        }
    }

    handleAddResource = () => {
        this.setState({
            showAddUserForm: true,
            showAddProjectForm: false,
            showAddColumnForm: false,
        })
    }

    recordUser = (e) => {
        this.setState({
            userValue: e.target.value
        })
    }

    handleSuccessClose = () => {
        this.setState({
            showToast: false,
            userValue: ''
        })
    }


    renderSuccessToast () {
        return (
            <Snackbar open={this.state.showToast} autoHideDuration={6000} onClose={this.handleClose}>
                <Alert onClose={this.handleSuccessClose} severity="success">
                    Resource Addes Succesfully.
                </Alert>
            </Snackbar>
        )
    }

    addResource = () => {
        const {
            columns,
            userValue,
            showToast
        } = this.state;
        const length = columns[1].lookup.length;
        columns[1].lookup[length + 1] = userValue;
        this.setState({
            columns: columns,
            showToast: true,
        });
    }

    renderForm = (label) => {
        const{userValue} = this.state;
        return (
            <div>
                <TextFieldWrapper>
                    <TextField label={label} onChange={this.recordUser} value={userValue}></TextField>
                </TextFieldWrapper>
                <ButtonWrapper>
                    <Button color="primary" onClick={this.addResource}>ADD</Button>
                </ButtonWrapper>
            </div>
        )
    }

    render() {
        const {
            columns,
            data,
            showAddUserForm,
            showToast
        } = this.state
        return (
            <div>
                <ButtonWrapper>
                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                    <Button onClick={this.handleAddResource} >Add Resource</Button>
                </ButtonGroup>
                </ButtonWrapper>
                {showAddUserForm && this.renderForm('Add Resource')}
                {showToast && this.renderSuccessToast()}
                <DataGridContainer>
                    <DataGrid columns ={columns} data = {data} />
                </DataGridContainer>
            </div>
        )
    }
}