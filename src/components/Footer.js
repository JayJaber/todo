import { Icon, Row, Col } from 'react-materialize';

export default function MyFooter (color) {
  return (
    <div className={'footer '+color} style={{padding: '0.5em', textAlign: 'center', paddingBottom: 'calc(0.5em - 4px)'}}>
      <Row style={{margin: 0}}>
        <Col s={6} m={6}>
          <p className="grey-text text-lighten-3">&copy; 2021 Jay Jaber</p>
        </Col>
        {/* Links */}
        <Col s={2} m={2}>
          <p className="grey-text text-lighten-3" >
            <a className="grey-text text-lighten-3" href="https://github.com/JayJaber"><img src='./GitHub.png' style={{height: 12}} alt='GitHub'/></a>
          </p>
        </Col>
        <Col s={2} m={2}>
          <p className="grey-text text-lighten-3" style={{paddingTop: 1}}>
            <a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/jay-jaber-7439bb1b3/"><img src='./Linkedin.svg' alt='Linkedin' style={{height: 16}}/></a>
          </p>
        </Col>
        <Col s={2} m={2}>
          <p className="grey-text text-lighten-3">
            <a className="grey-text text-lighten-3" href="mailto:calijayjaber@gmail.com"><Icon style={{fontSize: 18}}>mail</Icon></a>
          </p>
        </Col>
      </Row>
    </div>
  );
}