// import React from 'react';
// import { SketchPicker } from 'react-color';

// class SketchPickerComp extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//          displayColorPicker: false,
//          color: {
//            r: '241',
//            g: '112',
//            b: '19',
//            a: '1',
//          },
//          color2: {
//            r: '241',
//            g: '112',
//            b: '19',
//            a: '1',
//          },
//        };
//      }
   
//      handleClick = () => {
//        this.setState({ displayColorPicker: !this.state.displayColorPicker })
//      };
   
//      handleClose = () => {
//        this.setState({ displayColorPicker: false })
//      };
   
//      handleChange = (color) => {
//        this.setState({ color: color.rgb })
//      };
     
//   render() {
//     const styles = reactCSS({
//         'default': {
//           color: {
//             width: '70px',
//             height: '35px',
//             borderRadius: '2px',
//             background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
//           },
//           color: {
//             width: '70px',
//             height: '35px',
//             borderRadius: '2px',
//             background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
//           },
//           swatch: {
//             padding: '3px',
//             background: '#fff',
//             borderRadius: '1px',
//             boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
//             display: 'inline-block',
//             cursor: 'pointer',
//             float:'left'
//           },
//           popover: {
//             position: 'absolute',
//             zIndex: '2',
//           },
//           cover: {
//             position: 'fixed',
//             top: '0px',
//             right: '0px',
//             bottom: '0px',
//             left: '0px',
//           },
//         },
//       });
//     return (
//         <div className="container page-content">
//         <form className="default-form col-xs-12" onSubmit={this.handleSubmit} role="form">
//           <h4 className="form-sec-title site-color">{Localization[lang].CONFIG_GEN_PDF}</h4>
//           <section className="row pt-30">

//             <div className="col-xs-12 col-sm-12">   
//               <div className="form-group file-group">
//                 <label htmlFor="">{Localization[lang].HEADER_LOGO_LABEL}</label>
//                 <input type="file" name="img[]" className="file"/>
//                 <div className="input-group col-xs-12">
//                   <input type="text" className="form-control" disabled placeholder=""/>
//                   <span className="input-group-btn">
//                     <button className="browse btn btn-primary" type="button">{Localization[lang].CHOOSE_FILE_LABEL}</button>
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="col-xs-2">
//                 <div className="form-group row">                    
//                     <div className="col-xs-12">
//                       <label htmlFor="" className="">{Localization[lang].COLOR} 1</label>
//                     </div>                                                        
//                     <div className="col-xs-12">
//                       <div style={ styles.swatch } onClick={ this.handleClick }>
//                         <div style={ styles.color } />
//                       </div>
//                       { this.state.displayColorPicker ? <div style={ styles.popover }>
//                         <div style={ styles.cover } onClick={ this.handleClose }/>
//                         <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
//                       </div> : null }
//                   </div>
//                 </div> 

//                 <div className="form-group row">              
//                     <div className="col-xs-12">
//                       <label htmlFor="" className="">{Localization[lang].COLOR} 2</label>
//                     </div>                                                        
//                     <div className="col-xs-12">
//                       <div style={ styles.swatch } onClick={ this.handleClick }>
//                         <div style={ styles.color } />
//                       </div>
//                       { this.state.displayColorPicker ? <div style={ styles.popover }>
//                         <div style={ styles.cover } onClick={ this.handleClose }/>
//                         <SketchPicker color={ this.state.color2 } onChange={ this.handleChange } />
//                       </div> : null }
//                     </div>
//                 </div>
//             </div> 

//             <div className="col-xs-10">          
//               <div className="form-group">
//                   <label htmlFor="">{Localization[lang].FOOTER_LINE} 1</label>
//                   <input type="text" className="form-control" id="" placeholder=""/>
//               </div>
//               <div className="form-group">
//                   <label htmlFor="">{Localization[lang].FOOTER_LINE} 2</label>
//                   <input type="text" className="form-control" id="" placeholder=""/>
//               </div>
//             </div>

//             <div className="col-xs-12 seprator-grey">
//               <div className="row"><hr/></div>
//             </div>

//             <div className="text-right col-xs-12">
//               <button type="submit" className="btn btn-primary site-bg-color mt-10">{Localization[lang].SUBMIT}</button>
//             </div>
//           </section> 
//         </form>  
//       </div>
//     );
//   }
// }

// export default SketchPickerComp;