import React, {Component} from 'react';
import MaterialTable from 'material-table';

//I have used a custom data table made with material UI 
//Simple crud operations can be performed over local state of the component
//filter search, adding of tasks and removing of tasks.
//for future aspects we can   

export default class DataGrid extends Component {
  constructor(props){
    super(props);
    this.state = {
      columns: this.props.columns,
      data: this.props.data
    }
  }
  render() {
    return (
      <MaterialTable
        title="TASKS DASHBOARD"
        columns={this.state.columns}
        data={this.state.data}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                this.setState((prevState) => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  this.setState((prevState) => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                this.setState((prevState) => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            }),
         
        }}
        options={{
            filtering: true
          }}
      />
    );
  }

  
}
