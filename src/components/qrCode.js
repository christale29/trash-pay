
import React ,{Component} from 'react';
import QRCode from 'qrcode.react';
import HomeLayout from '../components/homelayout'
class Data extends Component{
    state={
        value:"paid"
    }
   render (){
    return(
        <HomeLayout>
        <div style ={{textAlign:'right',paddingTop:"100px",marginRight:"40px"}}>
              <h1>Scan the Record</h1>
              <QRCode style={{width:'15%',height:'15p%'}}
            
               id ='abcdf'
               value={this.state.value}
              />
              <h1>SCAN ME</h1>
        </div>
        </HomeLayout>
    );
}
}
export default Data;