import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Layout,PageHeader} from "antd";
const { Content } = Layout;
function App() {
  return (
    <div className="App">
        <div className="ant-content">
          <Content style={{ margin: '80px 30px 0 230px' }}>
              <PageHeader  title="Products" /> 
                    <div className="block-area">                        
                    {/* <TableProducts></TableProducts>  */}a
              </div>            
          </Content>           
      </div>
    </div>
  );
}

export default App;
