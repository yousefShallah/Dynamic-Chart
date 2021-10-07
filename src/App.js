
import React from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import {ToggleButton, ToggleButtonGroup} from '@mui/material';
import "./index.scss";
import Img from './img/img.png';
import Img1 from './img/img1.png';
import Img2 from './img/img2.png';
import Img3 from './img/img3.png';
import Img4 from './img/img4.png';
import Img5 from './img/img5.png';
import { SketchPicker } from 'react-color';
import MainChart from './components/MainChart';
import { Dropdown, Menu, Input } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import InputColor from 'react-input-color';



class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      labelValue:'',
      chartKey: "Pie",
      isOpen: false,
      activeColor: "",
      runThem: false,
      openMenu: false,
      selectedId: "",
      placeholder: "Enter Label data",
      labelsObj: [
          {
              id: "1" ,
              label: "January",
              color: "#B21F00",
          },
          {
              id: "2" ,
              label: "February",
              color: "#C9DE00",
          },
          {
              id: "3" ,
              label: "March",
              color: "#2FDE00",
          },
          {
              id: "4" ,
              label: "April",
              color: "#00A6B4",
          },
          {
              id: "5" ,
              label: "May",
              color: "#6800B4",
          }
      ]
    }
}


  handleChangeComplete = (color) => {
    const { selectedId } = this.state;
    const newLabels = this.state.labelsObj.map(label => {
      if (selectedId == label.id) {
        label.color = color.hex;
      }
      return label;
    });
    this.setState({
      labelsObj: newLabels,
    })
  }

  handleChangeChartKey = (event, newChartKey) => {
    this.setState({
      chartKey: newChartKey,
      labelValue: "",
      activeColor: ''
    })
  }

  handleOpenMenu = () => {
    this.setState({
      openMenu: true
    })
  }
  handleCloseMenu = () => {
    this.setState({
      openMenu: false
    })  
  }
  onclickItemDropDown = (id) => {
    this.setState({
      selectedId: id,
      labelValue: "",
      placeholder: "Enter Label data"
    })
  }

  getData = (e) => {
    const { value } = e.target;
    const { selectedId } = this.state;
    const newLabels = this.state.labelsObj.map(label => {
      if (selectedId == label.id) {
        label.label = value;
      }
      return label;
    });
    this.setState({
      labelsObj: newLabels,
      labelValue: value
    })
  }


  handelDropdownMenu = () => {
    const { labelsObj } = this.state;
    const menu = (
      <Menu>
        {labelsObj.map(item => {
          return(
            <Menu.Item>
              <a onClick={() => {this.onclickItemDropDown(item.id)}} >
                {item.label}
              </a>
            </Menu.Item>
          )
        })
        }
      </Menu>
    )
    return (
      <div >
        <Dropdown overlay={menu}>
          <span className="dropdown-btn" onClick={e => e.preventDefault()}>
            Find... <DownOutlined/>
          </span>
        </Dropdown> 
      </div>
    )
  }

  checkoutLabelUpdating = () => {
    const { selectedId } = this.state;
    if (selectedId){
      return(
        <div>
          <Input style={{marginBottom: "15px"}} placeholder={this.state.placeholder} value={this.state.labelValue} onChange={ this.getData } />
          <InputColor
            initialValue="#5e72e4"
            onChange={this.handleChangeComplete || this.getData}
            placement="right"
          />
        </div>
      )
    }
  }
  render(){
    return (
      <div className="app-contianer">
          <Container container>
            <Box>
              <div className="box-container" style={{position: 'relative'}}>
                <Grid container spacing={2}>
                  <Grid item xs={8} style={{display:"flex"}} justifyContent="center" alignItems="center">
                    <div className="preview-container">
                      {/* preview */}
                      <MainChart selectedId={this.state.selectedId} labelsObj={this.state.labelsObj} chartKey={this.state.chartKey} />
                    </div>
                  </Grid>
                  <Grid item xs={4} style={{}}>
                    <div className="config-inputs" style={{ marginTop: "10px"}}>
                      {this.handelDropdownMenu()}
                      {this.checkoutLabelUpdating()}
                    </div>
                    
                    <div className="config-container">
                      <div className="select-chart" style={{marginTop: "20px"}}>
                        <ToggleButtonGroup
                          color="primary"
                          value={this.state.chartKey}
                          exclusive
                          onChange={this.handleChangeChartKey}
                          style={{display:'grid', gridTemplateColumns: "auto auto"}}
                        >
                          <ToggleButton value="Pie"><img src={Img1} style={{width: "90px", height:"90px", objectFit: 'cover'}} /></ToggleButton>
                          <ToggleButton value="Line"><img src={Img4} style={{width: "90px", height:"90px", objectFit: 'cover'}} /></ToggleButton>
                          <ToggleButton value="Bar"> <img src={Img} style={{width: "90px", height:"90px", objectFit: 'cover'}} /> </ToggleButton>
                          <ToggleButton value="chart4"><img src={Img5} style={{width: "90px", height:"90px", objectFit: 'cover'}} /></ToggleButton>
                          <ToggleButton value="chart5"><img src={Img2} style={{width: "90px", height:"90px", objectFit: 'cover'}} /></ToggleButton>
                          <ToggleButton value="chart6"><img src={Img3} style={{width: "90px", height:"90px", objectFit: 'cover'}} /></ToggleButton>
                        </ToggleButtonGroup>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Box>
          </Container>
        </div>
      
    );
  }
}

export default App;
