import {
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c,
  $d3863c46a17e8a28$export$20e40289641fbbb6,
  Combination_default,
  hideOthers
} from "/build/_shared/chunk-BZVVIC5O.js";
import {
  $d7bdfb9eb0fdf311$export$6d08773d2e66f8f2,
  $d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9,
  $d7bdfb9eb0fdf311$export$c7109489551a4f4
} from "/build/_shared/chunk-2TJRRPFX.js";
import {
  $e02a7d9cb1dc128c$export$c74125a8e3af6bb2,
  $f631663db3294ace$export$b39126d51d94e6f3
} from "/build/_shared/chunk-54LKDAMD.js";
import {
  $5cb92bef7577960e$export$177fb62ff3ec1f22,
  $cf1ac5d9fe0e8206$export$722aac194ae923,
  $cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2,
  $cf1ac5d9fe0e8206$export$b688253958b8dfe7,
  $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9,
  $f1701beae083dbae$export$602eac185826482c
} from "/build/_shared/chunk-HVEEJRFY.js";
import {
  $1746a345f3d73bb7$export$f680877a34711e37
} from "/build/_shared/chunk-LQQW5RSX.js";
import {
  $71cd76cc60e0454e$export$6f32135080cb4c3,
  $8927f6f2acc4f386$export$250ffa63cdc0d034,
  $8927f6f2acc4f386$export$6d1a0317bde7de7f,
  $921a889cee6df7e8$export$99c2b779aa4e8b8b,
  $b1b2314f5f9a1d84$export$25bec8c6f54ee79a,
  $c512c27ab02ef895$export$50c7b4e9d9f19c1,
  $e42e1063c40fb3ef$export$b9ecd428b558ff10
} from "/build/_shared/chunk-RO4OX7CY.js";
import {
  $5e63c961fc1ce211$export$8c6ed5c666ac1360,
  $6ed0406888f73fc4$export$43e446d32b3d21af,
  $6ed0406888f73fc4$export$c7b2cbe3552a0d05,
  _extends
} from "/build/_shared/chunk-CHQ4BA76.js";
import {
  Icon
} from "/build/_shared/chunk-YWGK6LNJ.js";
import {
  cn
} from "/build/_shared/chunk-J754EQNG.js";
import {
  createHotContext
} from "/build/_shared/chunk-OC2Z5MX2.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
var import_react2 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-menu/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var $6cc32821e9371a1c$var$SELECTION_KEYS = [
  "Enter",
  " "
];
var $6cc32821e9371a1c$var$FIRST_KEYS = [
  "ArrowDown",
  "PageUp",
  "Home"
];
var $6cc32821e9371a1c$var$LAST_KEYS = [
  "ArrowUp",
  "PageDown",
  "End"
];
var $6cc32821e9371a1c$var$FIRST_LAST_KEYS = [
  ...$6cc32821e9371a1c$var$FIRST_KEYS,
  ...$6cc32821e9371a1c$var$LAST_KEYS
];
var $6cc32821e9371a1c$var$SUB_OPEN_KEYS = {
  ltr: [
    ...$6cc32821e9371a1c$var$SELECTION_KEYS,
    "ArrowRight"
  ],
  rtl: [
    ...$6cc32821e9371a1c$var$SELECTION_KEYS,
    "ArrowLeft"
  ]
};
var $6cc32821e9371a1c$var$SUB_CLOSE_KEYS = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
};
var $6cc32821e9371a1c$var$MENU_NAME = "Menu";
var [$6cc32821e9371a1c$var$Collection, $6cc32821e9371a1c$var$useCollection, $6cc32821e9371a1c$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($6cc32821e9371a1c$var$MENU_NAME);
var [$6cc32821e9371a1c$var$createMenuContext, $6cc32821e9371a1c$export$4027731b685e72eb] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($6cc32821e9371a1c$var$MENU_NAME, [
  $6cc32821e9371a1c$var$createCollectionScope,
  $cf1ac5d9fe0e8206$export$722aac194ae923,
  $d7bdfb9eb0fdf311$export$c7109489551a4f4
]);
var $6cc32821e9371a1c$var$usePopperScope = $cf1ac5d9fe0e8206$export$722aac194ae923();
var $6cc32821e9371a1c$var$useRovingFocusGroupScope = $d7bdfb9eb0fdf311$export$c7109489551a4f4();
var [$6cc32821e9371a1c$var$MenuProvider, $6cc32821e9371a1c$var$useMenuContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$MENU_NAME);
var [$6cc32821e9371a1c$var$MenuRootProvider, $6cc32821e9371a1c$var$useMenuRootContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$MENU_NAME);
var $6cc32821e9371a1c$export$d9b273488cd8ce6f = (props) => {
  const { __scopeMenu, open = false, children, dir, onOpenChange, modal = true } = props;
  const popperScope = $6cc32821e9371a1c$var$usePopperScope(__scopeMenu);
  const [content, setContent] = (0, import_react.useState)(null);
  const isUsingKeyboardRef = (0, import_react.useRef)(false);
  const handleOpenChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onOpenChange);
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  (0, import_react.useEffect)(() => {
    const handleKeyDown = () => {
      isUsingKeyboardRef.current = true;
      document.addEventListener("pointerdown", handlePointer, {
        capture: true,
        once: true
      });
      document.addEventListener("pointermove", handlePointer, {
        capture: true,
        once: true
      });
    };
    const handlePointer = () => isUsingKeyboardRef.current = false;
    document.addEventListener("keydown", handleKeyDown, {
      capture: true
    });
    return () => {
      document.removeEventListener("keydown", handleKeyDown, {
        capture: true
      });
      document.removeEventListener("pointerdown", handlePointer, {
        capture: true
      });
      document.removeEventListener("pointermove", handlePointer, {
        capture: true
      });
    };
  }, []);
  return /* @__PURE__ */ (0, import_react.createElement)($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, popperScope, /* @__PURE__ */ (0, import_react.createElement)($6cc32821e9371a1c$var$MenuProvider, {
    scope: __scopeMenu,
    open,
    onOpenChange: handleOpenChange,
    content,
    onContentChange: setContent
  }, /* @__PURE__ */ (0, import_react.createElement)($6cc32821e9371a1c$var$MenuRootProvider, {
    scope: __scopeMenu,
    onClose: (0, import_react.useCallback)(
      () => handleOpenChange(false),
      [
        handleOpenChange
      ]
    ),
    isUsingKeyboardRef,
    dir: direction,
    modal
  }, children)));
};
var $6cc32821e9371a1c$export$9fa5ebd18bee4d43 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, ...anchorProps } = props;
  const popperScope = $6cc32821e9371a1c$var$usePopperScope(__scopeMenu);
  return /* @__PURE__ */ (0, import_react.createElement)($cf1ac5d9fe0e8206$export$b688253958b8dfe7, _extends({}, popperScope, anchorProps, {
    ref: forwardedRef
  }));
});
var $6cc32821e9371a1c$var$PORTAL_NAME = "MenuPortal";
var [$6cc32821e9371a1c$var$PortalProvider, $6cc32821e9371a1c$var$usePortalContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$PORTAL_NAME, {
  forceMount: void 0
});
var $6cc32821e9371a1c$export$793392f970497feb = (props) => {
  const { __scopeMenu, forceMount, children, container } = props;
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$PORTAL_NAME, __scopeMenu);
  return /* @__PURE__ */ (0, import_react.createElement)($6cc32821e9371a1c$var$PortalProvider, {
    scope: __scopeMenu,
    forceMount
  }, /* @__PURE__ */ (0, import_react.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, /* @__PURE__ */ (0, import_react.createElement)($f1701beae083dbae$export$602eac185826482c, {
    asChild: true,
    container
  }, children)));
};
var $6cc32821e9371a1c$var$CONTENT_NAME = "MenuContent";
var [$6cc32821e9371a1c$var$MenuContentProvider, $6cc32821e9371a1c$var$useMenuContentContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$CONTENT_NAME);
var $6cc32821e9371a1c$export$479f0f2f71193efe = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const portalContext = $6cc32821e9371a1c$var$usePortalContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const { forceMount = portalContext.forceMount, ...contentProps } = props;
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  return /* @__PURE__ */ (0, import_react.createElement)($6cc32821e9371a1c$var$Collection.Provider, {
    scope: props.__scopeMenu
  }, /* @__PURE__ */ (0, import_react.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, /* @__PURE__ */ (0, import_react.createElement)($6cc32821e9371a1c$var$Collection.Slot, {
    scope: props.__scopeMenu
  }, rootContext.modal ? /* @__PURE__ */ (0, import_react.createElement)($6cc32821e9371a1c$var$MenuRootContentModal, _extends({}, contentProps, {
    ref: forwardedRef
  })) : /* @__PURE__ */ (0, import_react.createElement)($6cc32821e9371a1c$var$MenuRootContentNonModal, _extends({}, contentProps, {
    ref: forwardedRef
  })))));
});
var $6cc32821e9371a1c$var$MenuRootContentModal = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const ref = (0, import_react.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  (0, import_react.useEffect)(() => {
    const content = ref.current;
    if (content)
      return hideOthers(content);
  }, []);
  return /* @__PURE__ */ (0, import_react.createElement)($6cc32821e9371a1c$var$MenuContentImpl, _extends({}, props, {
    ref: composedRefs,
    trapFocus: context.open,
    disableOutsidePointerEvents: context.open,
    disableOutsideScroll: true,
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocusOutside,
      (event) => event.preventDefault(),
      {
        checkForDefaultPrevented: false
      }
    ),
    onDismiss: () => context.onOpenChange(false)
  }));
});
var $6cc32821e9371a1c$var$MenuRootContentNonModal = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  return /* @__PURE__ */ (0, import_react.createElement)($6cc32821e9371a1c$var$MenuContentImpl, _extends({}, props, {
    ref: forwardedRef,
    trapFocus: false,
    disableOutsidePointerEvents: false,
    disableOutsideScroll: false,
    onDismiss: () => context.onOpenChange(false)
  }));
});
var $6cc32821e9371a1c$var$MenuContentImpl = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, loop = false, trapFocus, onOpenAutoFocus, onCloseAutoFocus, disableOutsidePointerEvents, onEntryFocus, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, disableOutsideScroll, ...contentProps } = props;
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, __scopeMenu);
  const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$CONTENT_NAME, __scopeMenu);
  const popperScope = $6cc32821e9371a1c$var$usePopperScope(__scopeMenu);
  const rovingFocusGroupScope = $6cc32821e9371a1c$var$useRovingFocusGroupScope(__scopeMenu);
  const getItems = $6cc32821e9371a1c$var$useCollection(__scopeMenu);
  const [currentItemId, setCurrentItemId] = (0, import_react.useState)(null);
  const contentRef = (0, import_react.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef, context.onContentChange);
  const timerRef = (0, import_react.useRef)(0);
  const searchRef = (0, import_react.useRef)("");
  const pointerGraceTimerRef = (0, import_react.useRef)(0);
  const pointerGraceIntentRef = (0, import_react.useRef)(null);
  const pointerDirRef = (0, import_react.useRef)("right");
  const lastPointerXRef = (0, import_react.useRef)(0);
  const ScrollLockWrapper = disableOutsideScroll ? Combination_default : import_react.Fragment;
  const scrollLockWrapperProps = disableOutsideScroll ? {
    as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
    allowPinchZoom: true
  } : void 0;
  const handleTypeaheadSearch = (key) => {
    var _items$find, _items$find2;
    const search = searchRef.current + key;
    const items = getItems().filter(
      (item) => !item.disabled
    );
    const currentItem = document.activeElement;
    const currentMatch = (_items$find = items.find(
      (item) => item.ref.current === currentItem
    )) === null || _items$find === void 0 ? void 0 : _items$find.textValue;
    const values = items.map(
      (item) => item.textValue
    );
    const nextMatch = $6cc32821e9371a1c$var$getNextMatch(values, search, currentMatch);
    const newItem = (_items$find2 = items.find(
      (item) => item.textValue === nextMatch
    )) === null || _items$find2 === void 0 ? void 0 : _items$find2.ref.current;
    (function updateSearch(value) {
      searchRef.current = value;
      window.clearTimeout(timerRef.current);
      if (value !== "")
        timerRef.current = window.setTimeout(
          () => updateSearch(""),
          1e3
        );
    })(search);
    if (newItem)
      setTimeout(
        () => newItem.focus()
      );
  };
  (0, import_react.useEffect)(() => {
    return () => window.clearTimeout(timerRef.current);
  }, []);
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
  const isPointerMovingToSubmenu = (0, import_react.useCallback)((event) => {
    var _pointerGraceIntentRe, _pointerGraceIntentRe2;
    const isMovingTowards = pointerDirRef.current === ((_pointerGraceIntentRe = pointerGraceIntentRef.current) === null || _pointerGraceIntentRe === void 0 ? void 0 : _pointerGraceIntentRe.side);
    return isMovingTowards && $6cc32821e9371a1c$var$isPointerInGraceArea(event, (_pointerGraceIntentRe2 = pointerGraceIntentRef.current) === null || _pointerGraceIntentRe2 === void 0 ? void 0 : _pointerGraceIntentRe2.area);
  }, []);
  return /* @__PURE__ */ (0, import_react.createElement)($6cc32821e9371a1c$var$MenuContentProvider, {
    scope: __scopeMenu,
    searchRef,
    onItemEnter: (0, import_react.useCallback)((event) => {
      if (isPointerMovingToSubmenu(event))
        event.preventDefault();
    }, [
      isPointerMovingToSubmenu
    ]),
    onItemLeave: (0, import_react.useCallback)((event) => {
      var _contentRef$current;
      if (isPointerMovingToSubmenu(event))
        return;
      (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 || _contentRef$current.focus();
      setCurrentItemId(null);
    }, [
      isPointerMovingToSubmenu
    ]),
    onTriggerLeave: (0, import_react.useCallback)((event) => {
      if (isPointerMovingToSubmenu(event))
        event.preventDefault();
    }, [
      isPointerMovingToSubmenu
    ]),
    pointerGraceTimerRef,
    onPointerGraceIntentChange: (0, import_react.useCallback)((intent) => {
      pointerGraceIntentRef.current = intent;
    }, [])
  }, /* @__PURE__ */ (0, import_react.createElement)(ScrollLockWrapper, scrollLockWrapperProps, /* @__PURE__ */ (0, import_react.createElement)($d3863c46a17e8a28$export$20e40289641fbbb6, {
    asChild: true,
    trapped: trapFocus,
    onMountAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(onOpenAutoFocus, (event) => {
      var _contentRef$current2;
      event.preventDefault();
      (_contentRef$current2 = contentRef.current) === null || _contentRef$current2 === void 0 || _contentRef$current2.focus();
    }),
    onUnmountAutoFocus: onCloseAutoFocus
  }, /* @__PURE__ */ (0, import_react.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22, {
    asChild: true,
    disableOutsidePointerEvents,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside,
    onInteractOutside,
    onDismiss
  }, /* @__PURE__ */ (0, import_react.createElement)($d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9, _extends({
    asChild: true
  }, rovingFocusGroupScope, {
    dir: rootContext.dir,
    orientation: "vertical",
    loop,
    currentTabStopId: currentItemId,
    onCurrentTabStopIdChange: setCurrentItemId,
    onEntryFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(onEntryFocus, (event) => {
      if (!rootContext.isUsingKeyboardRef.current)
        event.preventDefault();
    })
  }), /* @__PURE__ */ (0, import_react.createElement)($cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2, _extends({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": $6cc32821e9371a1c$var$getOpenState(context.open),
    "data-radix-menu-content": "",
    dir: rootContext.dir
  }, popperScope, contentProps, {
    ref: composedRefs,
    style: {
      outline: "none",
      ...contentProps.style
    },
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(contentProps.onKeyDown, (event) => {
      const target = event.target;
      const isKeyDownInside = target.closest("[data-radix-menu-content]") === event.currentTarget;
      const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
      const isCharacterKey = event.key.length === 1;
      if (isKeyDownInside) {
        if (event.key === "Tab")
          event.preventDefault();
        if (!isModifierKey && isCharacterKey)
          handleTypeaheadSearch(event.key);
      }
      const content = contentRef.current;
      if (event.target !== content)
        return;
      if (!$6cc32821e9371a1c$var$FIRST_LAST_KEYS.includes(event.key))
        return;
      event.preventDefault();
      const items = getItems().filter(
        (item) => !item.disabled
      );
      const candidateNodes = items.map(
        (item) => item.ref.current
      );
      if ($6cc32821e9371a1c$var$LAST_KEYS.includes(event.key))
        candidateNodes.reverse();
      $6cc32821e9371a1c$var$focusFirst(candidateNodes);
    }),
    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlur, (event) => {
      if (!event.currentTarget.contains(event.target)) {
        window.clearTimeout(timerRef.current);
        searchRef.current = "";
      }
    }),
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, $6cc32821e9371a1c$var$whenMouse((event) => {
      const target = event.target;
      const pointerXHasChanged = lastPointerXRef.current !== event.clientX;
      if (event.currentTarget.contains(target) && pointerXHasChanged) {
        const newDir = event.clientX > lastPointerXRef.current ? "right" : "left";
        pointerDirRef.current = newDir;
        lastPointerXRef.current = event.clientX;
      }
    }))
  })))))));
});
var $6cc32821e9371a1c$export$22a631d1f72787bb = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, ...groupProps } = props;
  return /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    role: "group"
  }, groupProps, {
    ref: forwardedRef
  }));
});
var $6cc32821e9371a1c$export$dd37bec0e8a99143 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, ...labelProps } = props;
  return /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({}, labelProps, {
    ref: forwardedRef
  }));
});
var $6cc32821e9371a1c$var$ITEM_NAME = "MenuItem";
var $6cc32821e9371a1c$var$ITEM_SELECT = "menu.itemSelect";
var $6cc32821e9371a1c$export$2ce376c2cc3355c8 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { disabled = false, onSelect, ...itemProps } = props;
  const ref = (0, import_react.useRef)(null);
  const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$ITEM_NAME, props.__scopeMenu);
  const contentContext = $6cc32821e9371a1c$var$useMenuContentContext($6cc32821e9371a1c$var$ITEM_NAME, props.__scopeMenu);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const isPointerDownRef = (0, import_react.useRef)(false);
  const handleSelect = () => {
    const menuItem = ref.current;
    if (!disabled && menuItem) {
      const itemSelectEvent = new CustomEvent($6cc32821e9371a1c$var$ITEM_SELECT, {
        bubbles: true,
        cancelable: true
      });
      menuItem.addEventListener(
        $6cc32821e9371a1c$var$ITEM_SELECT,
        (event) => onSelect === null || onSelect === void 0 ? void 0 : onSelect(event),
        {
          once: true
        }
      );
      $8927f6f2acc4f386$export$6d1a0317bde7de7f(menuItem, itemSelectEvent);
      if (itemSelectEvent.defaultPrevented)
        isPointerDownRef.current = false;
      else
        rootContext.onClose();
    }
  };
  return /* @__PURE__ */ (0, import_react.createElement)($6cc32821e9371a1c$var$MenuItemImpl, _extends({}, itemProps, {
    ref: composedRefs,
    disabled,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, handleSelect),
    onPointerDown: (event) => {
      var _props$onPointerDown;
      (_props$onPointerDown = props.onPointerDown) === null || _props$onPointerDown === void 0 || _props$onPointerDown.call(props, event);
      isPointerDownRef.current = true;
    },
    onPointerUp: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerUp, (event) => {
      var _event$currentTarget;
      if (!isPointerDownRef.current)
        (_event$currentTarget = event.currentTarget) === null || _event$currentTarget === void 0 || _event$currentTarget.click();
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isTypingAhead = contentContext.searchRef.current !== "";
      if (disabled || isTypingAhead && event.key === " ")
        return;
      if ($6cc32821e9371a1c$var$SELECTION_KEYS.includes(event.key)) {
        event.currentTarget.click();
        event.preventDefault();
      }
    })
  }));
});
var $6cc32821e9371a1c$var$MenuItemImpl = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, disabled = false, textValue, ...itemProps } = props;
  const contentContext = $6cc32821e9371a1c$var$useMenuContentContext($6cc32821e9371a1c$var$ITEM_NAME, __scopeMenu);
  const rovingFocusGroupScope = $6cc32821e9371a1c$var$useRovingFocusGroupScope(__scopeMenu);
  const ref = (0, import_react.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const [isFocused, setIsFocused] = (0, import_react.useState)(false);
  const [textContent, setTextContent] = (0, import_react.useState)("");
  (0, import_react.useEffect)(() => {
    const menuItem = ref.current;
    if (menuItem) {
      var _menuItem$textContent;
      setTextContent(((_menuItem$textContent = menuItem.textContent) !== null && _menuItem$textContent !== void 0 ? _menuItem$textContent : "").trim());
    }
  }, [
    itemProps.children
  ]);
  return /* @__PURE__ */ (0, import_react.createElement)($6cc32821e9371a1c$var$Collection.ItemSlot, {
    scope: __scopeMenu,
    disabled,
    textValue: textValue !== null && textValue !== void 0 ? textValue : textContent
  }, /* @__PURE__ */ (0, import_react.createElement)($d7bdfb9eb0fdf311$export$6d08773d2e66f8f2, _extends({
    asChild: true
  }, rovingFocusGroupScope, {
    focusable: !disabled
  }), /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    role: "menuitem",
    "data-highlighted": isFocused ? "" : void 0,
    "aria-disabled": disabled || void 0,
    "data-disabled": disabled ? "" : void 0
  }, itemProps, {
    ref: composedRefs,
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, $6cc32821e9371a1c$var$whenMouse((event) => {
      if (disabled)
        contentContext.onItemLeave(event);
      else {
        contentContext.onItemEnter(event);
        if (!event.defaultPrevented) {
          const item = event.currentTarget;
          item.focus();
        }
      }
    })),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $6cc32821e9371a1c$var$whenMouse(
      (event) => contentContext.onItemLeave(event)
    )),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocus,
      () => setIsFocused(true)
    ),
    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onBlur,
      () => setIsFocused(false)
    )
  }))));
});
var $6cc32821e9371a1c$export$f6f243521332502d = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { checked = false, onCheckedChange, ...checkboxItemProps } = props;
  return /* @__PURE__ */ (0, import_react.createElement)($6cc32821e9371a1c$var$ItemIndicatorProvider, {
    scope: props.__scopeMenu,
    checked
  }, /* @__PURE__ */ (0, import_react.createElement)($6cc32821e9371a1c$export$2ce376c2cc3355c8, _extends({
    role: "menuitemcheckbox",
    "aria-checked": $6cc32821e9371a1c$var$isIndeterminate(checked) ? "mixed" : checked
  }, checkboxItemProps, {
    ref: forwardedRef,
    "data-state": $6cc32821e9371a1c$var$getCheckedState(checked),
    onSelect: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      checkboxItemProps.onSelect,
      () => onCheckedChange === null || onCheckedChange === void 0 ? void 0 : onCheckedChange($6cc32821e9371a1c$var$isIndeterminate(checked) ? true : !checked),
      {
        checkForDefaultPrevented: false
      }
    )
  })));
});
var $6cc32821e9371a1c$var$RADIO_GROUP_NAME = "MenuRadioGroup";
var [$6cc32821e9371a1c$var$RadioGroupProvider, $6cc32821e9371a1c$var$useRadioGroupContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$RADIO_GROUP_NAME, {
  value: void 0,
  onValueChange: () => {
  }
});
var $6cc32821e9371a1c$var$RADIO_ITEM_NAME = "MenuRadioItem";
var $6cc32821e9371a1c$export$69bd225e9817f6d0 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { value, ...radioItemProps } = props;
  const context = $6cc32821e9371a1c$var$useRadioGroupContext($6cc32821e9371a1c$var$RADIO_ITEM_NAME, props.__scopeMenu);
  const checked = value === context.value;
  return /* @__PURE__ */ (0, import_react.createElement)($6cc32821e9371a1c$var$ItemIndicatorProvider, {
    scope: props.__scopeMenu,
    checked
  }, /* @__PURE__ */ (0, import_react.createElement)($6cc32821e9371a1c$export$2ce376c2cc3355c8, _extends({
    role: "menuitemradio",
    "aria-checked": checked
  }, radioItemProps, {
    ref: forwardedRef,
    "data-state": $6cc32821e9371a1c$var$getCheckedState(checked),
    onSelect: $e42e1063c40fb3ef$export$b9ecd428b558ff10(radioItemProps.onSelect, () => {
      var _context$onValueChang;
      return (_context$onValueChang = context.onValueChange) === null || _context$onValueChang === void 0 ? void 0 : _context$onValueChang.call(context, value);
    }, {
      checkForDefaultPrevented: false
    })
  })));
});
var $6cc32821e9371a1c$var$ITEM_INDICATOR_NAME = "MenuItemIndicator";
var [$6cc32821e9371a1c$var$ItemIndicatorProvider, $6cc32821e9371a1c$var$useItemIndicatorContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$ITEM_INDICATOR_NAME, {
  checked: false
});
var $6cc32821e9371a1c$export$a2593e23056970a3 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, forceMount, ...itemIndicatorProps } = props;
  const indicatorContext = $6cc32821e9371a1c$var$useItemIndicatorContext($6cc32821e9371a1c$var$ITEM_INDICATOR_NAME, __scopeMenu);
  return /* @__PURE__ */ (0, import_react.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || $6cc32821e9371a1c$var$isIndeterminate(indicatorContext.checked) || indicatorContext.checked === true
  }, /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, itemIndicatorProps, {
    ref: forwardedRef,
    "data-state": $6cc32821e9371a1c$var$getCheckedState(indicatorContext.checked)
  })));
});
var $6cc32821e9371a1c$export$1cec7dcdd713e220 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeMenu, ...separatorProps } = props;
  return /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    role: "separator",
    "aria-orientation": "horizontal"
  }, separatorProps, {
    ref: forwardedRef
  }));
});
var $6cc32821e9371a1c$var$SUB_NAME = "MenuSub";
var [$6cc32821e9371a1c$var$MenuSubProvider, $6cc32821e9371a1c$var$useMenuSubContext] = $6cc32821e9371a1c$var$createMenuContext($6cc32821e9371a1c$var$SUB_NAME);
var $6cc32821e9371a1c$var$SUB_TRIGGER_NAME = "MenuSubTrigger";
var $6cc32821e9371a1c$export$5fbbb3ba7297405f = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
  const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
  const subContext = $6cc32821e9371a1c$var$useMenuSubContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
  const contentContext = $6cc32821e9371a1c$var$useMenuContentContext($6cc32821e9371a1c$var$SUB_TRIGGER_NAME, props.__scopeMenu);
  const openTimerRef = (0, import_react.useRef)(null);
  const { pointerGraceTimerRef, onPointerGraceIntentChange } = contentContext;
  const scope = {
    __scopeMenu: props.__scopeMenu
  };
  const clearOpenTimer = (0, import_react.useCallback)(() => {
    if (openTimerRef.current)
      window.clearTimeout(openTimerRef.current);
    openTimerRef.current = null;
  }, []);
  (0, import_react.useEffect)(
    () => clearOpenTimer,
    [
      clearOpenTimer
    ]
  );
  (0, import_react.useEffect)(() => {
    const pointerGraceTimer = pointerGraceTimerRef.current;
    return () => {
      window.clearTimeout(pointerGraceTimer);
      onPointerGraceIntentChange(null);
    };
  }, [
    pointerGraceTimerRef,
    onPointerGraceIntentChange
  ]);
  return /* @__PURE__ */ (0, import_react.createElement)($6cc32821e9371a1c$export$9fa5ebd18bee4d43, _extends({
    asChild: true
  }, scope), /* @__PURE__ */ (0, import_react.createElement)($6cc32821e9371a1c$var$MenuItemImpl, _extends({
    id: subContext.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": context.open,
    "aria-controls": subContext.contentId,
    "data-state": $6cc32821e9371a1c$var$getOpenState(context.open)
  }, props, {
    ref: $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, subContext.onTriggerChange),
    onClick: (event) => {
      var _props$onClick;
      (_props$onClick = props.onClick) === null || _props$onClick === void 0 || _props$onClick.call(props, event);
      if (props.disabled || event.defaultPrevented)
        return;
      event.currentTarget.focus();
      if (!context.open)
        context.onOpenChange(true);
    },
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, $6cc32821e9371a1c$var$whenMouse((event) => {
      contentContext.onItemEnter(event);
      if (event.defaultPrevented)
        return;
      if (!props.disabled && !context.open && !openTimerRef.current) {
        contentContext.onPointerGraceIntentChange(null);
        openTimerRef.current = window.setTimeout(() => {
          context.onOpenChange(true);
          clearOpenTimer();
        }, 100);
      }
    })),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $6cc32821e9371a1c$var$whenMouse((event) => {
      var _context$content;
      clearOpenTimer();
      const contentRect = (_context$content = context.content) === null || _context$content === void 0 ? void 0 : _context$content.getBoundingClientRect();
      if (contentRect) {
        var _context$content2;
        const side = (_context$content2 = context.content) === null || _context$content2 === void 0 ? void 0 : _context$content2.dataset.side;
        const rightSide = side === "right";
        const bleed = rightSide ? -5 : 5;
        const contentNearEdge = contentRect[rightSide ? "left" : "right"];
        const contentFarEdge = contentRect[rightSide ? "right" : "left"];
        contentContext.onPointerGraceIntentChange({
          area: [
            // consistently within polygon bounds
            {
              x: event.clientX + bleed,
              y: event.clientY
            },
            {
              x: contentNearEdge,
              y: contentRect.top
            },
            {
              x: contentFarEdge,
              y: contentRect.top
            },
            {
              x: contentFarEdge,
              y: contentRect.bottom
            },
            {
              x: contentNearEdge,
              y: contentRect.bottom
            }
          ],
          side
        });
        window.clearTimeout(pointerGraceTimerRef.current);
        pointerGraceTimerRef.current = window.setTimeout(
          () => contentContext.onPointerGraceIntentChange(null),
          300
        );
      } else {
        contentContext.onTriggerLeave(event);
        if (event.defaultPrevented)
          return;
        contentContext.onPointerGraceIntentChange(null);
      }
    })),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isTypingAhead = contentContext.searchRef.current !== "";
      if (props.disabled || isTypingAhead && event.key === " ")
        return;
      if ($6cc32821e9371a1c$var$SUB_OPEN_KEYS[rootContext.dir].includes(event.key)) {
        var _context$content3;
        context.onOpenChange(true);
        (_context$content3 = context.content) === null || _context$content3 === void 0 || _context$content3.focus();
        event.preventDefault();
      }
    })
  })));
});
var $6cc32821e9371a1c$var$SUB_CONTENT_NAME = "MenuSubContent";
var $6cc32821e9371a1c$export$e7142ab31822bde6 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const portalContext = $6cc32821e9371a1c$var$usePortalContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const { forceMount = portalContext.forceMount, ...subContentProps } = props;
  const context = $6cc32821e9371a1c$var$useMenuContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const rootContext = $6cc32821e9371a1c$var$useMenuRootContext($6cc32821e9371a1c$var$CONTENT_NAME, props.__scopeMenu);
  const subContext = $6cc32821e9371a1c$var$useMenuSubContext($6cc32821e9371a1c$var$SUB_CONTENT_NAME, props.__scopeMenu);
  const ref = (0, import_react.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  return /* @__PURE__ */ (0, import_react.createElement)($6cc32821e9371a1c$var$Collection.Provider, {
    scope: props.__scopeMenu
  }, /* @__PURE__ */ (0, import_react.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, /* @__PURE__ */ (0, import_react.createElement)($6cc32821e9371a1c$var$Collection.Slot, {
    scope: props.__scopeMenu
  }, /* @__PURE__ */ (0, import_react.createElement)($6cc32821e9371a1c$var$MenuContentImpl, _extends({
    id: subContext.contentId,
    "aria-labelledby": subContext.triggerId
  }, subContentProps, {
    ref: composedRefs,
    align: "start",
    side: rootContext.dir === "rtl" ? "left" : "right",
    disableOutsidePointerEvents: false,
    disableOutsideScroll: false,
    trapFocus: false,
    onOpenAutoFocus: (event) => {
      var _ref$current;
      if (rootContext.isUsingKeyboardRef.current)
        (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.focus();
      event.preventDefault();
    },
    onCloseAutoFocus: (event) => event.preventDefault(),
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusOutside, (event) => {
      if (event.target !== subContext.trigger)
        context.onOpenChange(false);
    }),
    onEscapeKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onEscapeKeyDown, (event) => {
      rootContext.onClose();
      event.preventDefault();
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isKeyDownInside = event.currentTarget.contains(event.target);
      const isCloseKey = $6cc32821e9371a1c$var$SUB_CLOSE_KEYS[rootContext.dir].includes(event.key);
      if (isKeyDownInside && isCloseKey) {
        var _subContext$trigger;
        context.onOpenChange(false);
        (_subContext$trigger = subContext.trigger) === null || _subContext$trigger === void 0 || _subContext$trigger.focus();
        event.preventDefault();
      }
    })
  })))));
});
function $6cc32821e9371a1c$var$getOpenState(open) {
  return open ? "open" : "closed";
}
function $6cc32821e9371a1c$var$isIndeterminate(checked) {
  return checked === "indeterminate";
}
function $6cc32821e9371a1c$var$getCheckedState(checked) {
  return $6cc32821e9371a1c$var$isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
function $6cc32821e9371a1c$var$focusFirst(candidates) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT)
      return;
    candidate.focus();
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT)
      return;
  }
}
function $6cc32821e9371a1c$var$wrapArray(array, startIndex) {
  return array.map(
    (_, index) => array[(startIndex + index) % array.length]
  );
}
function $6cc32821e9371a1c$var$getNextMatch(values, search, currentMatch) {
  const isRepeated = search.length > 1 && Array.from(search).every(
    (char) => char === search[0]
  );
  const normalizedSearch = isRepeated ? search[0] : search;
  const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
  let wrappedValues = $6cc32821e9371a1c$var$wrapArray(values, Math.max(currentMatchIndex, 0));
  const excludeCurrentMatch = normalizedSearch.length === 1;
  if (excludeCurrentMatch)
    wrappedValues = wrappedValues.filter(
      (v) => v !== currentMatch
    );
  const nextMatch = wrappedValues.find(
    (value) => value.toLowerCase().startsWith(normalizedSearch.toLowerCase())
  );
  return nextMatch !== currentMatch ? nextMatch : void 0;
}
function $6cc32821e9371a1c$var$isPointInPolygon(point, polygon) {
  const { x, y } = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x;
    const yi = polygon[i].y;
    const xj = polygon[j].x;
    const yj = polygon[j].y;
    const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect)
      inside = !inside;
  }
  return inside;
}
function $6cc32821e9371a1c$var$isPointerInGraceArea(event, area) {
  if (!area)
    return false;
  const cursorPos = {
    x: event.clientX,
    y: event.clientY
  };
  return $6cc32821e9371a1c$var$isPointInPolygon(cursorPos, area);
}
function $6cc32821e9371a1c$var$whenMouse(handler) {
  return (event) => event.pointerType === "mouse" ? handler(event) : void 0;
}
var $6cc32821e9371a1c$export$be92b6f5f03c0fe9 = $6cc32821e9371a1c$export$d9b273488cd8ce6f;
var $6cc32821e9371a1c$export$b688253958b8dfe7 = $6cc32821e9371a1c$export$9fa5ebd18bee4d43;
var $6cc32821e9371a1c$export$602eac185826482c = $6cc32821e9371a1c$export$793392f970497feb;
var $6cc32821e9371a1c$export$7c6e2c02157bb7d2 = $6cc32821e9371a1c$export$479f0f2f71193efe;
var $6cc32821e9371a1c$export$eb2fcfdbd7ba97d4 = $6cc32821e9371a1c$export$22a631d1f72787bb;
var $6cc32821e9371a1c$export$b04be29aa201d4f5 = $6cc32821e9371a1c$export$dd37bec0e8a99143;
var $6cc32821e9371a1c$export$6d08773d2e66f8f2 = $6cc32821e9371a1c$export$2ce376c2cc3355c8;
var $6cc32821e9371a1c$export$16ce288f89fa631c = $6cc32821e9371a1c$export$f6f243521332502d;
var $6cc32821e9371a1c$export$371ab307eab489c0 = $6cc32821e9371a1c$export$69bd225e9817f6d0;
var $6cc32821e9371a1c$export$c3468e2714d175fa = $6cc32821e9371a1c$export$a2593e23056970a3;
var $6cc32821e9371a1c$export$1ff3c3f08ae963c0 = $6cc32821e9371a1c$export$1cec7dcdd713e220;
var $6cc32821e9371a1c$export$2ea8a7a591ac5eac = $6cc32821e9371a1c$export$5fbbb3ba7297405f;
var $6cc32821e9371a1c$export$6d4de93b380beddf = $6cc32821e9371a1c$export$e7142ab31822bde6;

// node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
var $d08ef79370b62062$var$DROPDOWN_MENU_NAME = "DropdownMenu";
var [$d08ef79370b62062$var$createDropdownMenuContext, $d08ef79370b62062$export$c0623cd925aeb687] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($d08ef79370b62062$var$DROPDOWN_MENU_NAME, [
  $6cc32821e9371a1c$export$4027731b685e72eb
]);
var $d08ef79370b62062$var$useMenuScope = $6cc32821e9371a1c$export$4027731b685e72eb();
var [$d08ef79370b62062$var$DropdownMenuProvider, $d08ef79370b62062$var$useDropdownMenuContext] = $d08ef79370b62062$var$createDropdownMenuContext($d08ef79370b62062$var$DROPDOWN_MENU_NAME);
var $d08ef79370b62062$export$e44a253a59704894 = (props) => {
  const { __scopeDropdownMenu, children, dir, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  const triggerRef = (0, import_react2.useRef)(null);
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ (0, import_react2.createElement)($d08ef79370b62062$var$DropdownMenuProvider, {
    scope: __scopeDropdownMenu,
    triggerId: $1746a345f3d73bb7$export$f680877a34711e37(),
    triggerRef,
    contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
    open,
    onOpenChange: setOpen,
    onOpenToggle: (0, import_react2.useCallback)(
      () => setOpen(
        (prevOpen) => !prevOpen
      ),
      [
        setOpen
      ]
    ),
    modal
  }, /* @__PURE__ */ (0, import_react2.createElement)($6cc32821e9371a1c$export$be92b6f5f03c0fe9, _extends({}, menuScope, {
    open,
    onOpenChange: setOpen,
    dir,
    modal
  }), children));
};
var $d08ef79370b62062$var$TRIGGER_NAME = "DropdownMenuTrigger";
var $d08ef79370b62062$export$d2469213b3befba9 = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, disabled = false, ...triggerProps } = props;
  const context = $d08ef79370b62062$var$useDropdownMenuContext($d08ef79370b62062$var$TRIGGER_NAME, __scopeDropdownMenu);
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_react2.createElement)($6cc32821e9371a1c$export$b688253958b8dfe7, _extends({
    asChild: true
  }, menuScope), /* @__PURE__ */ (0, import_react2.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    id: context.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": context.open,
    "aria-controls": context.open ? context.contentId : void 0,
    "data-state": context.open ? "open" : "closed",
    "data-disabled": disabled ? "" : void 0,
    disabled
  }, triggerProps, {
    ref: $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, context.triggerRef),
    onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDown, (event) => {
      if (!disabled && event.button === 0 && event.ctrlKey === false) {
        context.onOpenToggle();
        if (!context.open)
          event.preventDefault();
      }
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      if (disabled)
        return;
      if ([
        "Enter",
        " "
      ].includes(event.key))
        context.onOpenToggle();
      if (event.key === "ArrowDown")
        context.onOpenChange(true);
      if ([
        "Enter",
        " ",
        "ArrowDown"
      ].includes(event.key))
        event.preventDefault();
    })
  })));
});
var $d08ef79370b62062$export$cd369b4d4d54efc9 = (props) => {
  const { __scopeDropdownMenu, ...portalProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_react2.createElement)($6cc32821e9371a1c$export$602eac185826482c, _extends({}, menuScope, portalProps));
};
var $d08ef79370b62062$var$CONTENT_NAME = "DropdownMenuContent";
var $d08ef79370b62062$export$6e76d93a37c01248 = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...contentProps } = props;
  const context = $d08ef79370b62062$var$useDropdownMenuContext($d08ef79370b62062$var$CONTENT_NAME, __scopeDropdownMenu);
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  const hasInteractedOutsideRef = (0, import_react2.useRef)(false);
  return /* @__PURE__ */ (0, import_react2.createElement)($6cc32821e9371a1c$export$7c6e2c02157bb7d2, _extends({
    id: context.contentId,
    "aria-labelledby": context.triggerId
  }, menuScope, contentProps, {
    ref: forwardedRef,
    onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onCloseAutoFocus, (event) => {
      var _context$triggerRef$c;
      if (!hasInteractedOutsideRef.current)
        (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
      hasInteractedOutsideRef.current = false;
      event.preventDefault();
    }),
    onInteractOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onInteractOutside, (event) => {
      const originalEvent = event.detail.originalEvent;
      const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
      const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
      if (!context.modal || isRightClick)
        hasInteractedOutsideRef.current = true;
    }),
    style: {
      ...props.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
});
var $d08ef79370b62062$export$246bebaba3a2f70e = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...groupProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_react2.createElement)($6cc32821e9371a1c$export$eb2fcfdbd7ba97d4, _extends({}, menuScope, groupProps, {
    ref: forwardedRef
  }));
});
var $d08ef79370b62062$export$76e48c5b57f24495 = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...labelProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_react2.createElement)($6cc32821e9371a1c$export$b04be29aa201d4f5, _extends({}, menuScope, labelProps, {
    ref: forwardedRef
  }));
});
var $d08ef79370b62062$export$ed97964d1871885d = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...itemProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_react2.createElement)($6cc32821e9371a1c$export$6d08773d2e66f8f2, _extends({}, menuScope, itemProps, {
    ref: forwardedRef
  }));
});
var $d08ef79370b62062$export$53a69729da201fa9 = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...checkboxItemProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_react2.createElement)($6cc32821e9371a1c$export$16ce288f89fa631c, _extends({}, menuScope, checkboxItemProps, {
    ref: forwardedRef
  }));
});
var $d08ef79370b62062$export$e4f69b41b1637536 = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...radioItemProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_react2.createElement)($6cc32821e9371a1c$export$371ab307eab489c0, _extends({}, menuScope, radioItemProps, {
    ref: forwardedRef
  }));
});
var $d08ef79370b62062$export$42355ae145153fb6 = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...itemIndicatorProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_react2.createElement)($6cc32821e9371a1c$export$c3468e2714d175fa, _extends({}, menuScope, itemIndicatorProps, {
    ref: forwardedRef
  }));
});
var $d08ef79370b62062$export$da160178fd3bc7e9 = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...separatorProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_react2.createElement)($6cc32821e9371a1c$export$1ff3c3f08ae963c0, _extends({}, menuScope, separatorProps, {
    ref: forwardedRef
  }));
});
var $d08ef79370b62062$export$21dcb7ec56f874cf = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...subTriggerProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_react2.createElement)($6cc32821e9371a1c$export$2ea8a7a591ac5eac, _extends({}, menuScope, subTriggerProps, {
    ref: forwardedRef
  }));
});
var $d08ef79370b62062$export$f34ec8bc2482cc5f = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...subContentProps } = props;
  const menuScope = $d08ef79370b62062$var$useMenuScope(__scopeDropdownMenu);
  return /* @__PURE__ */ (0, import_react2.createElement)($6cc32821e9371a1c$export$6d4de93b380beddf, _extends({}, menuScope, subContentProps, {
    ref: forwardedRef,
    style: {
      ...props.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
});
var $d08ef79370b62062$export$be92b6f5f03c0fe9 = $d08ef79370b62062$export$e44a253a59704894;
var $d08ef79370b62062$export$41fb9f06171c75f4 = $d08ef79370b62062$export$d2469213b3befba9;
var $d08ef79370b62062$export$602eac185826482c = $d08ef79370b62062$export$cd369b4d4d54efc9;
var $d08ef79370b62062$export$7c6e2c02157bb7d2 = $d08ef79370b62062$export$6e76d93a37c01248;
var $d08ef79370b62062$export$eb2fcfdbd7ba97d4 = $d08ef79370b62062$export$246bebaba3a2f70e;
var $d08ef79370b62062$export$b04be29aa201d4f5 = $d08ef79370b62062$export$76e48c5b57f24495;
var $d08ef79370b62062$export$6d08773d2e66f8f2 = $d08ef79370b62062$export$ed97964d1871885d;
var $d08ef79370b62062$export$16ce288f89fa631c = $d08ef79370b62062$export$53a69729da201fa9;
var $d08ef79370b62062$export$371ab307eab489c0 = $d08ef79370b62062$export$e4f69b41b1637536;
var $d08ef79370b62062$export$c3468e2714d175fa = $d08ef79370b62062$export$42355ae145153fb6;
var $d08ef79370b62062$export$1ff3c3f08ae963c0 = $d08ef79370b62062$export$da160178fd3bc7e9;
var $d08ef79370b62062$export$2ea8a7a591ac5eac = $d08ef79370b62062$export$21dcb7ec56f874cf;
var $d08ef79370b62062$export$6d4de93b380beddf = $d08ef79370b62062$export$f34ec8bc2482cc5f;

// app/shared/ui/DropdownMenu/DropdownMenu.tsx
var React = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/shared/ui/DropdownMenu/DropdownMenu.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/shared/ui/DropdownMenu/DropdownMenu.tsx"
  );
  import.meta.hot.lastModified = "1706588338081.6455";
}
var DropdownMenu = $d08ef79370b62062$export$be92b6f5f03c0fe9;
var DropdownMenuTrigger = $d08ef79370b62062$export$41fb9f06171c75f4;
var DropdownMenuGroup = $d08ef79370b62062$export$eb2fcfdbd7ba97d4;
var DropdownMenuSubTrigger = React.forwardRef(_c = ({
  className,
  inset,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($d08ef79370b62062$export$2ea8a7a591ac5eac, { ref, className: cn("flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent", inset && "pl-8", className), ...props, children: [
  children,
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-auto size-4", children: "\u25B6\uFE0F" }, void 0, false, {
    fileName: "app/shared/ui/DropdownMenu/DropdownMenu.tsx",
    lineNumber: 38,
    columnNumber: 3
  }, this)
] }, void 0, true, {
  fileName: "app/shared/ui/DropdownMenu/DropdownMenu.tsx",
  lineNumber: 36,
  columnNumber: 12
}, this));
_c2 = DropdownMenuSubTrigger;
DropdownMenuSubTrigger.displayName = $d08ef79370b62062$export$2ea8a7a591ac5eac.displayName;
var DropdownMenuSubContent = React.forwardRef(_c3 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($d08ef79370b62062$export$6d4de93b380beddf, { ref, className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props }, void 0, false, {
  fileName: "app/shared/ui/DropdownMenu/DropdownMenu.tsx",
  lineNumber: 45,
  columnNumber: 12
}, this));
_c4 = DropdownMenuSubContent;
DropdownMenuSubContent.displayName = $d08ef79370b62062$export$6d4de93b380beddf.displayName;
var DropdownMenuContent = React.forwardRef(_c5 = ({
  className,
  sideOffset = 4,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($d08ef79370b62062$export$602eac185826482c, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($d08ef79370b62062$export$7c6e2c02157bb7d2, { ref, sideOffset, className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props }, void 0, false, {
  fileName: "app/shared/ui/DropdownMenu/DropdownMenu.tsx",
  lineNumber: 53,
  columnNumber: 3
}, this) }, void 0, false, {
  fileName: "app/shared/ui/DropdownMenu/DropdownMenu.tsx",
  lineNumber: 52,
  columnNumber: 12
}, this));
_c6 = DropdownMenuContent;
DropdownMenuContent.displayName = $d08ef79370b62062$export$7c6e2c02157bb7d2.displayName;
var DropdownMenuItem = React.forwardRef(_c7 = ({
  className,
  inset,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($d08ef79370b62062$export$6d08773d2e66f8f2, { ref, className: cn("relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", inset && "pl-8", className), ...props }, void 0, false, {
  fileName: "app/shared/ui/DropdownMenu/DropdownMenu.tsx",
  lineNumber: 61,
  columnNumber: 12
}, this));
_c8 = DropdownMenuItem;
DropdownMenuItem.displayName = $d08ef79370b62062$export$6d08773d2e66f8f2.displayName;
var DropdownMenuCheckboxItem = React.forwardRef(_c9 = ({
  className,
  children,
  checked,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($d08ef79370b62062$export$16ce288f89fa631c, { ref, className: cn("relative flex select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), checked, ...props, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($d08ef79370b62062$export$c3468e2714d175fa, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { name: "check" }, void 0, false, {
    fileName: "app/shared/ui/DropdownMenu/DropdownMenu.tsx",
    lineNumber: 73,
    columnNumber: 6
  }, this) }, void 0, false, {
    fileName: "app/shared/ui/DropdownMenu/DropdownMenu.tsx",
    lineNumber: 72,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/shared/ui/DropdownMenu/DropdownMenu.tsx",
    lineNumber: 71,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/shared/ui/DropdownMenu/DropdownMenu.tsx",
    lineNumber: 70,
    columnNumber: 3
  }, this),
  children
] }, void 0, true, {
  fileName: "app/shared/ui/DropdownMenu/DropdownMenu.tsx",
  lineNumber: 69,
  columnNumber: 12
}, this));
_c10 = DropdownMenuCheckboxItem;
DropdownMenuCheckboxItem.displayName = $d08ef79370b62062$export$16ce288f89fa631c.displayName;
var DropdownMenuRadioItem = React.forwardRef(_c11 = ({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($d08ef79370b62062$export$371ab307eab489c0, { ref, className: cn("relative flex select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), ...props, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($d08ef79370b62062$export$c3468e2714d175fa, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-2", children: "\u26AA" }, void 0, false, {
    fileName: "app/shared/ui/DropdownMenu/DropdownMenu.tsx",
    lineNumber: 88,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/shared/ui/DropdownMenu/DropdownMenu.tsx",
    lineNumber: 87,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/shared/ui/DropdownMenu/DropdownMenu.tsx",
    lineNumber: 86,
    columnNumber: 3
  }, this),
  children
] }, void 0, true, {
  fileName: "app/shared/ui/DropdownMenu/DropdownMenu.tsx",
  lineNumber: 85,
  columnNumber: 12
}, this));
_c12 = DropdownMenuRadioItem;
DropdownMenuRadioItem.displayName = $d08ef79370b62062$export$371ab307eab489c0.displayName;
var DropdownMenuLabel = React.forwardRef(_c13 = ({
  className,
  inset,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($d08ef79370b62062$export$b04be29aa201d4f5, { ref, className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className), ...props }, void 0, false, {
  fileName: "app/shared/ui/DropdownMenu/DropdownMenu.tsx",
  lineNumber: 99,
  columnNumber: 12
}, this));
_c14 = DropdownMenuLabel;
DropdownMenuLabel.displayName = $d08ef79370b62062$export$b04be29aa201d4f5.displayName;
var DropdownMenuSeparator = React.forwardRef(_c15 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($d08ef79370b62062$export$1ff3c3f08ae963c0, { ref, className: cn("-mx-1 my-1 h-px bg-muted", className), ...props }, void 0, false, {
  fileName: "app/shared/ui/DropdownMenu/DropdownMenu.tsx",
  lineNumber: 105,
  columnNumber: 12
}, this));
_c16 = DropdownMenuSeparator;
DropdownMenuSeparator.displayName = $d08ef79370b62062$export$1ff3c3f08ae963c0.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: cn("ml-auto text-xs tracking-widest opacity-60", className), ...props }, void 0, false, {
    fileName: "app/shared/ui/DropdownMenu/DropdownMenu.tsx",
    lineNumber: 112,
    columnNumber: 10
  }, this);
};
_c17 = DropdownMenuShortcut;
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
var _c9;
var _c10;
var _c11;
var _c12;
var _c13;
var _c14;
var _c15;
var _c16;
var _c17;
$RefreshReg$(_c, "DropdownMenuSubTrigger$React.forwardRef");
$RefreshReg$(_c2, "DropdownMenuSubTrigger");
$RefreshReg$(_c3, "DropdownMenuSubContent$React.forwardRef");
$RefreshReg$(_c4, "DropdownMenuSubContent");
$RefreshReg$(_c5, "DropdownMenuContent$React.forwardRef");
$RefreshReg$(_c6, "DropdownMenuContent");
$RefreshReg$(_c7, "DropdownMenuItem$React.forwardRef");
$RefreshReg$(_c8, "DropdownMenuItem");
$RefreshReg$(_c9, "DropdownMenuCheckboxItem$React.forwardRef");
$RefreshReg$(_c10, "DropdownMenuCheckboxItem");
$RefreshReg$(_c11, "DropdownMenuRadioItem$React.forwardRef");
$RefreshReg$(_c12, "DropdownMenuRadioItem");
$RefreshReg$(_c13, "DropdownMenuLabel$React.forwardRef");
$RefreshReg$(_c14, "DropdownMenuLabel");
$RefreshReg$(_c15, "DropdownMenuSeparator$React.forwardRef");
$RefreshReg$(_c16, "DropdownMenuSeparator");
$RefreshReg$(_c17, "DropdownMenuShortcut");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator
};
//# sourceMappingURL=/build/_shared/chunk-2BPJYSIY.js.map
