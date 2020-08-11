import React, { useContext, useState, useEffect } from 'react';
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
import VisibilityBtn from './VisibilityBtn';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import $ from 'jquery';

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
  const { disabledFacets, setDisabledFacets, setIsAddingFacet, addedElements, setAddedElements } = useContext(AppContext);

  const handleDisplayHideChange = (facetLabel) => {
    // const shouldDisable = disabledFacets.includes(facetLabel);
    // if (!shouldDisable) {
    //   window.hiddenElementsArray.push(window.selectedDOM);
    //   $(`#${window.selectedDOM}`).css('background-color', 'red');
    //   setDisabledFacets([...disabledFacets, facetLabel]);
    // } else {
    //   const index = window.hiddenElementsArray.indexOf(window.selectedDOM);
    //   if (index > -1) {
    //     window.hiddenElementsArray.splice(index, 1);
    //   }
    //   $(`#${window.selectedDOM}`).css('background-color', 'unset');
    //   const newDisabledFacets = disabledFacets && disabledFacets.filter(facet => facet !== facetLabel);
    //   setDisabledFacets(newDisabledFacets || []);
    // }
    // setShouldDisplay(val);
  }

  const handleAdd = () => {
    setIsAddingFacet(true);
  }

  const classes = useTreeItemStyles();
  const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, facetLabel, elementLabel, hasPlusBtn = false, hasDeleteBtn = false, hasViewBtn = false, hasHideBtn = true, ...other } = props;
  const shouldDisable = disabledFacets.includes(labelText);

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
          {hasViewBtn ? <VisibilityBtn visible={shouldDisable} onClick={() => { handleDisplayHideChange(labelText) }}></VisibilityBtn> : null}
          {hasDeleteBtn ? <Button onClick={() => { }} color="primary" aria-label="add">
            {<DeleteOutlineIcon />}
          </Button> : null}
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

  const [shouldDisplay, setShouldDisplay] = useState(false);

  const { isAddingFacet, addedFacets, setAddedElements, newlyAddedFacet, setNewlyAddedFacet, addedElements, setCanDeleteElement } = useContext(AppContext);

  useEffect(() => {

    $('#fixed-container *').hover(
      function (e) {
        $(this).css('border', '1px solid black');
        $(this).css('cursor', 'pointer');
        e.preventDefault();
        e.stopPropagation();
        return false;
      }, function (e) {
        $(this).css('border', 'none');
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    ).click((e) => {
      if (!e.target.id) return;
      // document.getElementById("ToolBoxLabel").innerHTML = `${e.target.id}`;
      window.selectedDOM = e.target.id;

      onAddElement();
      //changeDisplayHide(e.target.id);
    })

    // this triggers 4x times everytime TODO fix
    const onAddElement = () => {

      let oldVals = addedElements.get(newlyAddedFacet);

      if (!oldVals || oldVals.length === 0) {
        oldVals = [];
      }
      if (oldVals.includes(window.selectedDOM)) {
        // enqueueSnackbar(`Element "${window.selectedDOM}" has already been added in the "${newlyAddedFacet}".`, { variant: "error" });
        return false;
      }
      const newVals = [...oldVals, window.selectedDOM];
      const newMap = new Map(addedElements);
      newMap.set(newlyAddedFacet, newVals);
      // setCanDeleteElement(true);
      setAddedElements(newMap);
      // enqueueSnackbar(`Added Element "${window.selectedDOM}" in the "${newlyAddedFacet}"!`, { variant: "success" });
    }
  }, [addedElements, enqueueSnackbar, newlyAddedFacet, setAddedElements, setCanDeleteElement]);


  const classes = useStyles();
  let arr = [];

  const deleteItem = (facetLabel, elementLabel) => {
    const vals = addedElements.get(facetLabel);
    const newArr = vals.filter(element => element !== elementLabel);
    addedElements.set(facetLabel, newArr);
    setAddedElements(new Map(addedElements));
  }

  const addedFacetsStyledTreeItems = addedFacets.map((facetLabel) => {
    const addedElementsByFacet = addedElements.get(facetLabel);

    const addedElementsTreeItems = addedElementsByFacet && addedElementsByFacet.map((element) => {
      arr.push(facetLabel + element);
      return <StyledTreeItem
        onClick={() => {
          deleteItem(facetLabel, element);
          enqueueSnackbar(`Selected "${element}"!`, { variant: "success" });
        }}
        facetLabel={facetLabel}
        elementLabel={element}
        hasDeleteBtn
        onLabelClick={() => {
          window.selectedDOM = `${element}`;
          setNewlyAddedFacet(facetLabel);
        }} key={facetLabel + element} nodeId={facetLabel + element} labelText={element} />
    });

    return <StyledTreeItem hasViewBtn selected={[addedElementsByFacet]}
      expanded={addedElementsByFacet} key={facetLabel}
      onLabelClick={() => { setNewlyAddedFacet(facetLabel); }}
      nodeId={facetLabel} labelText={facetLabel}>
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