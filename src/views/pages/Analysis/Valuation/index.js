import React, {
  useCallback,
  useState,
  useEffect
} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardHeader,
  Divider,
  List,
  makeStyles
} from '@material-ui/core';
import GenericMoreButton from 'src/components/GenericMoreButton';

const useStyles = makeStyles(() => ({
  root: {}
}));

function AnalysisValuation({ className, ...rest }) {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        title="AnalysisValuation"
      />
      <Divider />
    </Card>
  );
}

AnalysisValuation.propTypes = {
  className: PropTypes.string
};

export default AnalysisValuation;
