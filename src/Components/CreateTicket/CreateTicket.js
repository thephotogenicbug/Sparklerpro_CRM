import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import NotesIcon from "@material-ui/icons/Notes";
import AttachmentIcon from "@material-ui/icons/Attachment";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TopBar from "../Navbar/TopBar";
import "./ticketStyles.css";
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  active: {
    "& $line": {
      borderColor: "#784af4",
    },
  },
  completed: {
    "& $line": {
      borderColor: "#784af4",
    },
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "#784af4",
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(24, 115, 129) 0%,rgb(66, 159, 173) 50%,rgb(24, 115, 129) 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(24, 115, 129) 0%,rgb(66, 159, 173) 50%,rgb(24, 115, 129) 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(24, 115, 129) 0%, rgb(66, 159, 173) 50%, rgb(24, 115, 129) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(24, 115, 129) 0%, rgb(66, 159, 173) 50%, rgb(24, 115, 129) 100%)",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <AttachMoneyIcon />,
    3: <AttachmentIcon />,
    4: <NotesIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "80px",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Choose Service",
    "Choose Your Budget",
    "Attachment",
    "Enter Your Notes",
  ];
}

export default function CreateTicket() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const [myservice, setMyService] = useState("");
  const [subservice, setSubService] = useState("");

  console.log(myservice);
  console.log(subservice);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                      <select
                        className="form-control p-2"
                        value={myservice}
                        onChange={(e) => setMyService(e.target.value)}
                      >
                        <option>CHOOSE SERVICE</option>
                        <option>APP DEVELOPMENT</option>
                        <option>WEB DEVELOPMENT</option>
                        <option>DIGITAL MARKETING</option>
                      </select>
                    </div>
                    <div
                      className="col-md-4"
                      value={subservice}
                      onChange={(e) => setSubService(e.target.value)}
                    >
                      {myservice === "APP DEVELOPMENT" ? (
                        <select className="form-control p-2">
                          <option>IOS</option>
                          <option>ANDROID</option>
                          <option>HYBRID</option>
                        </select>
                      ) : myservice === "WEB DEVELOPMENT" ? (
                        <select className="form-control p-2">
                          <option>STATIC</option>
                          <option>DYNAMIC</option>
                          <option>ECOMMERCE</option>
                        </select>
                      ) : myservice === "DIGITAL MARKETING" ? (
                        <select className="form-control p-2">
                          <option>SMM</option>
                          <option>SEO</option>
                          <option>EMAIL MARKETING</option>
                        </select>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case 1:
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-4">
                <label>Enter Your Budget</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
        );
      case 2:
        return "Attachment";
      case 3:
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-4">
                <label>Enter Notes</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
        );
      default:
        return "Enter Your Notes";
    }
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const Submitted = () => {
    console.log("Form Submitted Successfully");
  };

  return (
    <>
      <TopBar title="Create Ticket" />
      <div className={classes.root}>
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          connector={<ColorlibConnector />}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel
                className="stepper"
                style={{ width: "250px" }}
                StepIconComponent={ColorlibStepIcon}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </div>
          ) : (
            <div className="button_wrapper">
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <div>
                <div className="button_container">
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  {activeStep === steps.length - 1 ? (
                    <button className="button" onClick={Submitted}>
                      Finish
                    </button>
                  ) : (
                    <button className="button" onClick={handleNext}>
                      Next
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
