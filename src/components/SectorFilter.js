import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Menu,
  MenuItem,
  SvgIcon,
  makeStyles
} from '@material-ui/core';
import { Database as DatabaseIcon } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { setSector } from 'src/actions/analysisActions';


const sectorsList = [
  {
    key: 'bank',
    label: 'Setor Bancário'
  },
];

const useStyles = makeStyles((theme) => ({
  root: {},
  actionIcon: {
    marginRight: theme.spacing(1)
  }
}));

function SectorFilter({ className, ...rest }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const actionRef = useRef(null);
  const { sector } = useSelector(state => state.analysis)
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    dispatch(setSector(sectorsList[0]));
  }, [dispatch]);

  const handleSectorChange = async (sector) => {
    setMenuOpen(false)
    await dispatch(setSector(sector));
  }
  return (
    <React.Fragment>
      <Button
        ref={actionRef}
        onClick={() => setMenuOpen(true)}
      >
        <SvgIcon
          fontSize="small"
          className={classes.actionIcon}
        >
          <DatabaseIcon />
        </SvgIcon>
        {sector?.label}
      </Button>
      <Menu
        anchorEl={actionRef.current}
        onClose={() => setMenuOpen(false)}
        open={isMenuOpen}
        PaperProps={{ className: classes.menu }}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        {sectorsList.map((t) => (
          <MenuItem
            key={t.key}
            onClick={() => handleSectorChange(t)}
          >
            {t.label}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
}

SectorFilter.propTypes = {
  className: PropTypes.string
};

export default SectorFilter;
