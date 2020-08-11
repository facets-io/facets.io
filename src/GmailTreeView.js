import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Button from '@material-ui/core/Button';
import BasicTextField from './BasicTextField';
import AppContext from './AppContext';
import { useSnackbar } from 'notistack';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useTreeItemStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    '&:hover > $content': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:focus > $content, &$selected > $content': {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
      color: 'var(--tree-view-color)',
    },
    '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
      backgroundColor: 'transparent',
    },
  },
  content: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '$expanded > &': {
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
  group: {
    marginLeft: 0,
    '& $content': {
      paddingLeft: theme.spacing(2),
    },
  },
  expanded: {},
  selected: {},
  label: {
    fontWeight: 'inherit',
    color: 'inherit',
  },
  labelRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.5, 0),
  },
  labelIcon: {
    marginRight: theme.spacing(1),
  },
  labelText: {
    fontWeight: 'inherit',
    flexGrow: 1,
  },
}));

function StyledTreeItem(props) {
  const { enqueueSnackbar } = useSnackbar();

  const handleAdd = () => {
    setIsAddingFacet(true);
  }

  const classes = useTreeItemStyles();
  const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, hasPlusBtn = false, hasViewBtn = true, hasHideBtn = true, ...other } = props;
  const { setIsAddingFacet } = useContext(AppContext);
  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
          {hasPlusBtn ? <Button onClick={() => { handleAdd() }}>+</Button> : null}
          {hasViewBtn ? <VisibilityIcon onClick={() => {
            enqueueSnackbar(`Functionality to be added soon!`, { variant: "error" });
          }}>+</VisibilityIcon> : null}
        </div>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

const useStyles = makeStyles({
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function GmailTreeView() {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const { isAddingFacet, addedFacets, newlyAddedFacet, setNewlyAddedFacet, addedElements, setCanDeleteElement } = useContext(AppContext);
  let arr = [];
  const addedFacetsStyledTreeItems = addedFacets.map((facetLabel) => {

    const addedElementsByFacet = addedElements.get(facetLabel);

    const addedElementsTreeItems = addedElementsByFacet && addedElementsByFacet.map((element) => {
      arr.push(facetLabel + element);
      return <StyledTreeItem onLabelClick={() => { window.selectedDOM = `${element}`; setCanDeleteElement(true); setNewlyAddedFacet(facetLabel); enqueueSnackbar(`Selected "${element}"!`, { variant: "info" }); }} key={facetLabel + element} nodeId={facetLabel + element} labelText={element} />
    })

    return <StyledTreeItem selected={[addedElementsByFacet]} expanded={addedElementsByFacet} key={facetLabel} onLabelClick={() => { setNewlyAddedFacet(facetLabel); enqueueSnackbar(`Selected "${facetLabel}"!`, { variant: "info" }); }} nodeId={facetLabel} labelText={facetLabel}>
      {addedElementsTreeItems}
    </StyledTreeItem>
  });

  const addingFacetInput = <BasicTextField />;
  const allKeys = addedElements.keys();

  return (
    <TreeView
      key='FacetTreeView'
      // defaultSelected={['Facets']}
      expanded={['Facets', ...allKeys]}
      selected={[newlyAddedFacet]}
      className={classes.root}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
    >
      <StyledTreeItem hasPlusBtn nodeId="Facets" labelText="Facets" labelIcon={MailIcon} >{isAddingFacet ? addingFacetInput : null}
        {addedFacetsStyledTreeItems}
      </StyledTreeItem>
    </TreeView>
  );
}