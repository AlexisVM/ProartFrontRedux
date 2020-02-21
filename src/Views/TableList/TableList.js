import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../../_components/Grid/GridItem.js";
import GridContainer from "../../_components/Grid/GridContainer.js";
import Table from "../../_components/Table/Table.js";
import Card from "../../_components/Card/Card.js";
import CardHeader from "../../_components/Card/CardHeader.js";
import CardBody from "../../_components/Card/CardBody.js";

import Button from '@material-ui/core/Button';

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

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Mis Clases</h4>
            <p className={classes.cardCategoryWhite}>
              Info
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Maestro", "Palo", "Salon", "Horario", "fecha"]}
              tableData={[
                [ "Javier Alatorre", "Guajira","Lucero Tena", "9:00 AM - 10:30 AM", "10-15 Julio"],
                [ "La Truco","Soleá", "Pericet", "10:35 AM - 12:05 AM", "10-15 Julio"]

              ]}
            />
            <Button variant="outlined" color="primary">
              Imprimir Horario
            </Button>
          </CardBody>
        </Card>
      </GridItem>

    </GridContainer>
  );
}
