import './App.css';
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import Main from './components/Main';
const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
      <Layout>
          <Header className='header'>Header</Header>
          <Content>
              <Main />
          </Content>
          <Footer className='footer'>Footer</Footer>
      </Layout>
  );
}

export default App;
