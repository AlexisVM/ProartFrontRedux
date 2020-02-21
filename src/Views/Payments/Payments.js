import React, {Component} from 'react'
// core components
import GridItem from "../../_components/Grid/GridItem.js";
import GridContainer from "../../_components/Grid/GridContainer.js";
import Card from "../../_components/Card/Card.js";
import CardHeader from "../../_components/Card/CardHeader.js";
import CardBody from "../../_components/Card/CardBody.js";
/*To upload files*/
import {DropzoneArea} from 'material-ui-dropzone'

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};
class Payments extends Component{
  constructor(props){
    super(props);
    this.state = {
      files: []
    };
  }
  handleChange(files){
    this.setState({
      files: files
    });
  }
  render(){
    return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 style={styles.cardTitleWhite}>Información de pagos</h4>
          </CardHeader>
          <CardBody>
            <p >
              Aquí se podrán subir todos los comprobantes de pago ya sea en modalidad de único pago o parcialidades.
            </p>

                <DropzoneArea
                    open={this.state.open}
                    dropzoneText={'Arrastra un archivo o haz click'}
                    onChange={this.handleChange.bind(this)}
                    acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                    showPreviews={false}
                    showFileNames={true}
                    filesLimit={5}
                    maxFileSize={5000000}
                />
          </CardBody>
        </Card>
      </GridItem>

    </GridContainer>
    );
  }
}

export default Payments;
