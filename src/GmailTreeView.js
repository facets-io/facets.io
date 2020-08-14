import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import MailIcon from '@material-ui/icons/Mail';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import BasicTextField from './BasicTextField';
import AppContext from './AppContext';
import { useSnackbar } from 'notistack';
import $ from 'jquery';
import StyledTreeItem from './StyledTreeItem';

const useStyles = makeStyles({
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function GmailTreeView() {
  const { enqueueSnackbar } = useSnackbar();
  const { isAddingFacet, addedFacets, setAddedElements, newlyAddedFacet, setNewlyAddedFacet,
    addedElements, setCanDeleteElement } = useContext(AppContext);

  useEffect(() => {
    //   console.log('RUNNING SCRIPT')
    //   var iframe = document.getElementById("fixed-container");
    //   var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
    //   innerDoc.querySelectorAll('*').forEach(e => {
    //     e.addEventListener("mouseenter", function (event) {
    //       // highlight the mouseenter target
    //       $(this).css('border', '1px solid black');
    //       $(this).css('cursor', 'pointer');
    //       event.preventDefault();
    //       event.stopPropagation();

    //       // reset the color after a short delay
    //       setTimeout(function () {
    //         event.target.style.color = "purple";
    //       }, 500);
    //     }, false);
    //     e.addEventListener("mouseleave", function (event) {
    //       // highlight the mouseenter target
    //       $(this).css('border', 'none');
    //       event.preventDefault();
    //       event.stopPropagation();
    //     }, false);
    //     e.addEventListener("click", function (event) {
    //       console.log('@CLICK', event)
    //       if (!event.target.id) return;
    //       window.selectedDOM = event.target.id;
    //       console.log('selectedDOM: ', window.selectedDOM);
    //       onAddElement();
    //     }, false);
    //   });

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
      window.selectedDOM = e.target.id;

      onAddElement();
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
      console.log('NEWMAP', newMap);
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

    return <StyledTreeItem hasViewBtn
      selected={[addedElementsByFacet]}
      facetLabel={facetLabel}
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