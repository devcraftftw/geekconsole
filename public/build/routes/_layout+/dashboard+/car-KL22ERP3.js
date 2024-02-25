import {
  Dialog,
  DialogContent,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  format
} from "/build/_shared/chunk-KA2PX4QT.js";
import {
  Badge
} from "/build/_shared/chunk-RNGSMI55.js";
import {
  require_cuid2
} from "/build/_shared/chunk-FERROO4A.js";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "/build/_shared/chunk-2BPJYSIY.js";
import {
  RemoveScrollBar,
  __assign,
  __rest,
  __spreadArray,
  createSidecarMedium,
  exportSidecar,
  fullWidthClassName,
  hideOthers,
  styleSingleton,
  useMergeRefs,
  zeroRightClassName
} from "/build/_shared/chunk-BZVVIC5O.js";
import "/build/_shared/chunk-2TJRRPFX.js";
import "/build/_shared/chunk-54LKDAMD.js";
import {
  StatusButton
} from "/build/_shared/chunk-4XWLGYB5.js";
import "/build/_shared/chunk-BZBQSHJ3.js";
import "/build/_shared/chunk-IATUL5VE.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import "/build/_shared/chunk-3FDTPL7P.js";
import {
  ErrorList,
  getFormProps,
  useForm
} from "/build/_shared/chunk-JBR5K2OT.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import {
  Button
} from "/build/_shared/chunk-ZGF5TUXK.js";
import "/build/_shared/chunk-HVEEJRFY.js";
import "/build/_shared/chunk-LQQW5RSX.js";
import {
  $8927f6f2acc4f386$export$250ffa63cdc0d034
} from "/build/_shared/chunk-RO4OX7CY.js";
import {
  _extends
} from "/build/_shared/chunk-CHQ4BA76.js";
import {
  AuthenticityTokenInput
} from "/build/_shared/chunk-6LMWWETO.js";
import {
  Icon
} from "/build/_shared/chunk-YWGK6LNJ.js";
import {
  DELETE_EXPENSE_INTENT,
  invariant,
  useIsPending
} from "/build/_shared/chunk-O6I6CHNL.js";
import "/build/_shared/chunk-WAALZXNF.js";
import {
  GeneralErrorBoundary
} from "/build/_shared/chunk-PVP4W74X.js";
import {
  cn
} from "/build/_shared/chunk-J754EQNG.js";
import {
  Form,
  Link,
  Outlet,
  useActionData,
  useLoaderData
} from "/build/_shared/chunk-HCJ6L7J4.js";
import {
  require_react_dom
} from "/build/_shared/chunk-GIAAE3CH.js";
import {
  createHotContext
} from "/build/_shared/chunk-OC2Z5MX2.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_layout+/dashboard+/car.tsx
var import_cuid2 = __toESM(require_cuid2(), 1);
var import_node = __toESM(require_node(), 1);

// node_modules/@tanstack/react-table/build/lib/index.mjs
var React = __toESM(require_react(), 1);

// node_modules/@tanstack/table-core/build/lib/index.mjs
function functionalUpdate(updater, input) {
  return typeof updater === "function" ? updater(input) : updater;
}
function makeStateUpdater(key, instance) {
  return (updater) => {
    instance.setState((old) => {
      return {
        ...old,
        [key]: functionalUpdate(updater, old[key])
      };
    });
  };
}
function isFunction(d) {
  return d instanceof Function;
}
function isNumberArray(d) {
  return Array.isArray(d) && d.every((val) => typeof val === "number");
}
function flattenBy(arr, getChildren) {
  const flat = [];
  const recurse = (subArr) => {
    subArr.forEach((item) => {
      flat.push(item);
      const children = getChildren(item);
      if (children != null && children.length) {
        recurse(children);
      }
    });
  };
  recurse(arr);
  return flat;
}
function memo(getDeps, fn, opts) {
  let deps = [];
  let result;
  return () => {
    let depTime;
    if (opts.key && opts.debug)
      depTime = Date.now();
    const newDeps = getDeps();
    const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index) => deps[index] !== dep);
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    let resultTime;
    if (opts.key && opts.debug)
      resultTime = Date.now();
    result = fn(...newDeps);
    opts == null || opts.onChange == null || opts.onChange(result);
    if (opts.key && opts.debug) {
      if (opts != null && opts.debug()) {
        const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
        const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
        const resultFpsPercentage = resultEndTime / 16;
        const pad = (str, num) => {
          str = String(str);
          while (str.length < num) {
            str = " " + str;
          }
          return str;
        };
        console.info(`%c\u23F1 ${pad(resultEndTime, 5)} /${pad(depEndTime, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * resultFpsPercentage, 120))}deg 100% 31%);`, opts == null ? void 0 : opts.key);
      }
    }
    return result;
  };
}
function createColumn(table, columnDef, depth, parent) {
  var _ref, _resolvedColumnDef$id;
  const defaultColumn = table._getDefaultColumnDef();
  const resolvedColumnDef = {
    ...defaultColumn,
    ...columnDef
  };
  const accessorKey = resolvedColumnDef.accessorKey;
  let id = (_ref = (_resolvedColumnDef$id = resolvedColumnDef.id) != null ? _resolvedColumnDef$id : accessorKey ? accessorKey.replace(".", "_") : void 0) != null ? _ref : typeof resolvedColumnDef.header === "string" ? resolvedColumnDef.header : void 0;
  let accessorFn;
  if (resolvedColumnDef.accessorFn) {
    accessorFn = resolvedColumnDef.accessorFn;
  } else if (accessorKey) {
    if (accessorKey.includes(".")) {
      accessorFn = (originalRow) => {
        let result = originalRow;
        for (const key of accessorKey.split(".")) {
          var _result;
          result = (_result = result) == null ? void 0 : _result[key];
          if (result === void 0) {
            console.warn(`"${key}" in deeply nested key "${accessorKey}" returned undefined.`);
          }
        }
        return result;
      };
    } else {
      accessorFn = (originalRow) => originalRow[resolvedColumnDef.accessorKey];
    }
  }
  if (!id) {
    if (true) {
      throw new Error(resolvedColumnDef.accessorFn ? `Columns require an id when using an accessorFn` : `Columns require an id when using a non-string header`);
    }
    throw new Error();
  }
  let column = {
    id: `${String(id)}`,
    accessorFn,
    parent,
    depth,
    columnDef: resolvedColumnDef,
    columns: [],
    getFlatColumns: memo(() => [true], () => {
      var _column$columns;
      return [column, ...(_column$columns = column.columns) == null ? void 0 : _column$columns.flatMap((d) => d.getFlatColumns())];
    }, {
      key: false,
      debug: () => {
        var _table$options$debugA;
        return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugColumns;
      }
    }),
    getLeafColumns: memo(() => [table._getOrderColumnsFn()], (orderColumns2) => {
      var _column$columns2;
      if ((_column$columns2 = column.columns) != null && _column$columns2.length) {
        let leafColumns = column.columns.flatMap((column2) => column2.getLeafColumns());
        return orderColumns2(leafColumns);
      }
      return [column];
    }, {
      key: false,
      debug: () => {
        var _table$options$debugA2;
        return (_table$options$debugA2 = table.options.debugAll) != null ? _table$options$debugA2 : table.options.debugColumns;
      }
    })
  };
  for (const feature of table._features) {
    feature.createColumn == null || feature.createColumn(column, table);
  }
  return column;
}
function createHeader(table, column, options) {
  var _options$id;
  const id = (_options$id = options.id) != null ? _options$id : column.id;
  let header = {
    id,
    column,
    index: options.index,
    isPlaceholder: !!options.isPlaceholder,
    placeholderId: options.placeholderId,
    depth: options.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: () => {
      const leafHeaders = [];
      const recurseHeader = (h) => {
        if (h.subHeaders && h.subHeaders.length) {
          h.subHeaders.map(recurseHeader);
        }
        leafHeaders.push(h);
      };
      recurseHeader(header);
      return leafHeaders;
    },
    getContext: () => ({
      table,
      header,
      column
    })
  };
  table._features.forEach((feature) => {
    feature.createHeader == null || feature.createHeader(header, table);
  });
  return header;
}
var Headers = {
  createTable: (table) => {
    table.getHeaderGroups = memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allColumns, leafColumns, left, right) => {
      var _left$map$filter, _right$map$filter;
      const leftColumns = (_left$map$filter = left == null ? void 0 : left.map((columnId) => leafColumns.find((d) => d.id === columnId)).filter(Boolean)) != null ? _left$map$filter : [];
      const rightColumns = (_right$map$filter = right == null ? void 0 : right.map((columnId) => leafColumns.find((d) => d.id === columnId)).filter(Boolean)) != null ? _right$map$filter : [];
      const centerColumns = leafColumns.filter((column) => !(left != null && left.includes(column.id)) && !(right != null && right.includes(column.id)));
      const headerGroups = buildHeaderGroups(allColumns, [...leftColumns, ...centerColumns, ...rightColumns], table);
      return headerGroups;
    }, {
      key: "getHeaderGroups",
      debug: () => {
        var _table$options$debugA;
        return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugHeaders;
      }
    });
    table.getCenterHeaderGroups = memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allColumns, leafColumns, left, right) => {
      leafColumns = leafColumns.filter((column) => !(left != null && left.includes(column.id)) && !(right != null && right.includes(column.id)));
      return buildHeaderGroups(allColumns, leafColumns, table, "center");
    }, {
      key: "getCenterHeaderGroups",
      debug: () => {
        var _table$options$debugA2;
        return (_table$options$debugA2 = table.options.debugAll) != null ? _table$options$debugA2 : table.options.debugHeaders;
      }
    });
    table.getLeftHeaderGroups = memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.left], (allColumns, leafColumns, left) => {
      var _left$map$filter2;
      const orderedLeafColumns = (_left$map$filter2 = left == null ? void 0 : left.map((columnId) => leafColumns.find((d) => d.id === columnId)).filter(Boolean)) != null ? _left$map$filter2 : [];
      return buildHeaderGroups(allColumns, orderedLeafColumns, table, "left");
    }, {
      key: "getLeftHeaderGroups",
      debug: () => {
        var _table$options$debugA3;
        return (_table$options$debugA3 = table.options.debugAll) != null ? _table$options$debugA3 : table.options.debugHeaders;
      }
    });
    table.getRightHeaderGroups = memo(() => [table.getAllColumns(), table.getVisibleLeafColumns(), table.getState().columnPinning.right], (allColumns, leafColumns, right) => {
      var _right$map$filter2;
      const orderedLeafColumns = (_right$map$filter2 = right == null ? void 0 : right.map((columnId) => leafColumns.find((d) => d.id === columnId)).filter(Boolean)) != null ? _right$map$filter2 : [];
      return buildHeaderGroups(allColumns, orderedLeafColumns, table, "right");
    }, {
      key: "getRightHeaderGroups",
      debug: () => {
        var _table$options$debugA4;
        return (_table$options$debugA4 = table.options.debugAll) != null ? _table$options$debugA4 : table.options.debugHeaders;
      }
    });
    table.getFooterGroups = memo(() => [table.getHeaderGroups()], (headerGroups) => {
      return [...headerGroups].reverse();
    }, {
      key: "getFooterGroups",
      debug: () => {
        var _table$options$debugA5;
        return (_table$options$debugA5 = table.options.debugAll) != null ? _table$options$debugA5 : table.options.debugHeaders;
      }
    });
    table.getLeftFooterGroups = memo(() => [table.getLeftHeaderGroups()], (headerGroups) => {
      return [...headerGroups].reverse();
    }, {
      key: "getLeftFooterGroups",
      debug: () => {
        var _table$options$debugA6;
        return (_table$options$debugA6 = table.options.debugAll) != null ? _table$options$debugA6 : table.options.debugHeaders;
      }
    });
    table.getCenterFooterGroups = memo(() => [table.getCenterHeaderGroups()], (headerGroups) => {
      return [...headerGroups].reverse();
    }, {
      key: "getCenterFooterGroups",
      debug: () => {
        var _table$options$debugA7;
        return (_table$options$debugA7 = table.options.debugAll) != null ? _table$options$debugA7 : table.options.debugHeaders;
      }
    });
    table.getRightFooterGroups = memo(() => [table.getRightHeaderGroups()], (headerGroups) => {
      return [...headerGroups].reverse();
    }, {
      key: "getRightFooterGroups",
      debug: () => {
        var _table$options$debugA8;
        return (_table$options$debugA8 = table.options.debugAll) != null ? _table$options$debugA8 : table.options.debugHeaders;
      }
    });
    table.getFlatHeaders = memo(() => [table.getHeaderGroups()], (headerGroups) => {
      return headerGroups.map((headerGroup) => {
        return headerGroup.headers;
      }).flat();
    }, {
      key: "getFlatHeaders",
      debug: () => {
        var _table$options$debugA9;
        return (_table$options$debugA9 = table.options.debugAll) != null ? _table$options$debugA9 : table.options.debugHeaders;
      }
    });
    table.getLeftFlatHeaders = memo(() => [table.getLeftHeaderGroups()], (left) => {
      return left.map((headerGroup) => {
        return headerGroup.headers;
      }).flat();
    }, {
      key: "getLeftFlatHeaders",
      debug: () => {
        var _table$options$debugA10;
        return (_table$options$debugA10 = table.options.debugAll) != null ? _table$options$debugA10 : table.options.debugHeaders;
      }
    });
    table.getCenterFlatHeaders = memo(() => [table.getCenterHeaderGroups()], (left) => {
      return left.map((headerGroup) => {
        return headerGroup.headers;
      }).flat();
    }, {
      key: "getCenterFlatHeaders",
      debug: () => {
        var _table$options$debugA11;
        return (_table$options$debugA11 = table.options.debugAll) != null ? _table$options$debugA11 : table.options.debugHeaders;
      }
    });
    table.getRightFlatHeaders = memo(() => [table.getRightHeaderGroups()], (left) => {
      return left.map((headerGroup) => {
        return headerGroup.headers;
      }).flat();
    }, {
      key: "getRightFlatHeaders",
      debug: () => {
        var _table$options$debugA12;
        return (_table$options$debugA12 = table.options.debugAll) != null ? _table$options$debugA12 : table.options.debugHeaders;
      }
    });
    table.getCenterLeafHeaders = memo(() => [table.getCenterFlatHeaders()], (flatHeaders) => {
      return flatHeaders.filter((header) => {
        var _header$subHeaders;
        return !((_header$subHeaders = header.subHeaders) != null && _header$subHeaders.length);
      });
    }, {
      key: "getCenterLeafHeaders",
      debug: () => {
        var _table$options$debugA13;
        return (_table$options$debugA13 = table.options.debugAll) != null ? _table$options$debugA13 : table.options.debugHeaders;
      }
    });
    table.getLeftLeafHeaders = memo(() => [table.getLeftFlatHeaders()], (flatHeaders) => {
      return flatHeaders.filter((header) => {
        var _header$subHeaders2;
        return !((_header$subHeaders2 = header.subHeaders) != null && _header$subHeaders2.length);
      });
    }, {
      key: "getLeftLeafHeaders",
      debug: () => {
        var _table$options$debugA14;
        return (_table$options$debugA14 = table.options.debugAll) != null ? _table$options$debugA14 : table.options.debugHeaders;
      }
    });
    table.getRightLeafHeaders = memo(() => [table.getRightFlatHeaders()], (flatHeaders) => {
      return flatHeaders.filter((header) => {
        var _header$subHeaders3;
        return !((_header$subHeaders3 = header.subHeaders) != null && _header$subHeaders3.length);
      });
    }, {
      key: "getRightLeafHeaders",
      debug: () => {
        var _table$options$debugA15;
        return (_table$options$debugA15 = table.options.debugAll) != null ? _table$options$debugA15 : table.options.debugHeaders;
      }
    });
    table.getLeafHeaders = memo(() => [table.getLeftHeaderGroups(), table.getCenterHeaderGroups(), table.getRightHeaderGroups()], (left, center, right) => {
      var _left$0$headers, _left$, _center$0$headers, _center$, _right$0$headers, _right$;
      return [...(_left$0$headers = (_left$ = left[0]) == null ? void 0 : _left$.headers) != null ? _left$0$headers : [], ...(_center$0$headers = (_center$ = center[0]) == null ? void 0 : _center$.headers) != null ? _center$0$headers : [], ...(_right$0$headers = (_right$ = right[0]) == null ? void 0 : _right$.headers) != null ? _right$0$headers : []].map((header) => {
        return header.getLeafHeaders();
      }).flat();
    }, {
      key: "getLeafHeaders",
      debug: () => {
        var _table$options$debugA16;
        return (_table$options$debugA16 = table.options.debugAll) != null ? _table$options$debugA16 : table.options.debugHeaders;
      }
    });
  }
};
function buildHeaderGroups(allColumns, columnsToGroup, table, headerFamily) {
  var _headerGroups$0$heade, _headerGroups$;
  let maxDepth = 0;
  const findMaxDepth = function(columns2, depth) {
    if (depth === void 0) {
      depth = 1;
    }
    maxDepth = Math.max(maxDepth, depth);
    columns2.filter((column) => column.getIsVisible()).forEach((column) => {
      var _column$columns;
      if ((_column$columns = column.columns) != null && _column$columns.length) {
        findMaxDepth(column.columns, depth + 1);
      }
    }, 0);
  };
  findMaxDepth(allColumns);
  let headerGroups = [];
  const createHeaderGroup = (headersToGroup, depth) => {
    const headerGroup = {
      depth,
      id: [headerFamily, `${depth}`].filter(Boolean).join("_"),
      headers: []
    };
    const pendingParentHeaders = [];
    headersToGroup.forEach((headerToGroup) => {
      const latestPendingParentHeader = [...pendingParentHeaders].reverse()[0];
      const isLeafHeader = headerToGroup.column.depth === headerGroup.depth;
      let column;
      let isPlaceholder = false;
      if (isLeafHeader && headerToGroup.column.parent) {
        column = headerToGroup.column.parent;
      } else {
        column = headerToGroup.column;
        isPlaceholder = true;
      }
      if (latestPendingParentHeader && (latestPendingParentHeader == null ? void 0 : latestPendingParentHeader.column) === column) {
        latestPendingParentHeader.subHeaders.push(headerToGroup);
      } else {
        const header = createHeader(table, column, {
          id: [headerFamily, depth, column.id, headerToGroup == null ? void 0 : headerToGroup.id].filter(Boolean).join("_"),
          isPlaceholder,
          placeholderId: isPlaceholder ? `${pendingParentHeaders.filter((d) => d.column === column).length}` : void 0,
          depth,
          index: pendingParentHeaders.length
        });
        header.subHeaders.push(headerToGroup);
        pendingParentHeaders.push(header);
      }
      headerGroup.headers.push(headerToGroup);
      headerToGroup.headerGroup = headerGroup;
    });
    headerGroups.push(headerGroup);
    if (depth > 0) {
      createHeaderGroup(pendingParentHeaders, depth - 1);
    }
  };
  const bottomHeaders = columnsToGroup.map((column, index) => createHeader(table, column, {
    depth: maxDepth,
    index
  }));
  createHeaderGroup(bottomHeaders, maxDepth - 1);
  headerGroups.reverse();
  const recurseHeadersForSpans = (headers) => {
    const filteredHeaders = headers.filter((header) => header.column.getIsVisible());
    return filteredHeaders.map((header) => {
      let colSpan = 0;
      let rowSpan = 0;
      let childRowSpans = [0];
      if (header.subHeaders && header.subHeaders.length) {
        childRowSpans = [];
        recurseHeadersForSpans(header.subHeaders).forEach((_ref) => {
          let {
            colSpan: childColSpan,
            rowSpan: childRowSpan
          } = _ref;
          colSpan += childColSpan;
          childRowSpans.push(childRowSpan);
        });
      } else {
        colSpan = 1;
      }
      const minChildRowSpan = Math.min(...childRowSpans);
      rowSpan = rowSpan + minChildRowSpan;
      header.colSpan = colSpan;
      header.rowSpan = rowSpan;
      return {
        colSpan,
        rowSpan
      };
    });
  };
  recurseHeadersForSpans((_headerGroups$0$heade = (_headerGroups$ = headerGroups[0]) == null ? void 0 : _headerGroups$.headers) != null ? _headerGroups$0$heade : []);
  return headerGroups;
}
var defaultColumnSizing = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
};
var getDefaultColumnSizingInfoState = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: false,
  columnSizingStart: []
});
var ColumnSizing = {
  getDefaultColumnDef: () => {
    return defaultColumnSizing;
  },
  getInitialState: (state) => {
    return {
      columnSizing: {},
      columnSizingInfo: getDefaultColumnSizingInfoState(),
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      columnResizeMode: "onEnd",
      columnResizeDirection: "ltr",
      onColumnSizingChange: makeStateUpdater("columnSizing", table),
      onColumnSizingInfoChange: makeStateUpdater("columnSizingInfo", table)
    };
  },
  createColumn: (column, table) => {
    column.getSize = () => {
      var _column$columnDef$min, _ref, _column$columnDef$max;
      const columnSize = table.getState().columnSizing[column.id];
      return Math.min(Math.max((_column$columnDef$min = column.columnDef.minSize) != null ? _column$columnDef$min : defaultColumnSizing.minSize, (_ref = columnSize != null ? columnSize : column.columnDef.size) != null ? _ref : defaultColumnSizing.size), (_column$columnDef$max = column.columnDef.maxSize) != null ? _column$columnDef$max : defaultColumnSizing.maxSize);
    };
    column.getStart = (position) => {
      const columns2 = !position ? table.getVisibleLeafColumns() : position === "left" ? table.getLeftVisibleLeafColumns() : table.getRightVisibleLeafColumns();
      const index = columns2.findIndex((d) => d.id === column.id);
      if (index > 0) {
        const prevSiblingColumn = columns2[index - 1];
        return prevSiblingColumn.getStart(position) + prevSiblingColumn.getSize();
      }
      return 0;
    };
    column.resetSize = () => {
      table.setColumnSizing((_ref2) => {
        let {
          [column.id]: _2,
          ...rest
        } = _ref2;
        return rest;
      });
    };
    column.getCanResize = () => {
      var _column$columnDef$ena, _table$options$enable;
      return ((_column$columnDef$ena = column.columnDef.enableResizing) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableColumnResizing) != null ? _table$options$enable : true);
    };
    column.getIsResizing = () => {
      return table.getState().columnSizingInfo.isResizingColumn === column.id;
    };
  },
  createHeader: (header, table) => {
    header.getSize = () => {
      let sum2 = 0;
      const recurse = (header2) => {
        if (header2.subHeaders.length) {
          header2.subHeaders.forEach(recurse);
        } else {
          var _header$column$getSiz;
          sum2 += (_header$column$getSiz = header2.column.getSize()) != null ? _header$column$getSiz : 0;
        }
      };
      recurse(header);
      return sum2;
    };
    header.getStart = () => {
      if (header.index > 0) {
        const prevSiblingHeader = header.headerGroup.headers[header.index - 1];
        return prevSiblingHeader.getStart() + prevSiblingHeader.getSize();
      }
      return 0;
    };
    header.getResizeHandler = (_contextDocument) => {
      const column = table.getColumn(header.column.id);
      const canResize = column == null ? void 0 : column.getCanResize();
      return (e) => {
        if (!column || !canResize) {
          return;
        }
        e.persist == null || e.persist();
        if (isTouchStartEvent(e)) {
          if (e.touches && e.touches.length > 1) {
            return;
          }
        }
        const startSize = header.getSize();
        const columnSizingStart = header ? header.getLeafHeaders().map((d) => [d.column.id, d.column.getSize()]) : [[column.id, column.getSize()]];
        const clientX = isTouchStartEvent(e) ? Math.round(e.touches[0].clientX) : e.clientX;
        const newColumnSizing = {};
        const updateOffset = (eventType, clientXPos) => {
          if (typeof clientXPos !== "number") {
            return;
          }
          table.setColumnSizingInfo((old) => {
            var _old$startOffset, _old$startSize;
            const deltaDirection = table.options.columnResizeDirection === "rtl" ? -1 : 1;
            const deltaOffset = (clientXPos - ((_old$startOffset = old == null ? void 0 : old.startOffset) != null ? _old$startOffset : 0)) * deltaDirection;
            const deltaPercentage = Math.max(deltaOffset / ((_old$startSize = old == null ? void 0 : old.startSize) != null ? _old$startSize : 0), -0.999999);
            old.columnSizingStart.forEach((_ref3) => {
              let [columnId, headerSize] = _ref3;
              newColumnSizing[columnId] = Math.round(Math.max(headerSize + headerSize * deltaPercentage, 0) * 100) / 100;
            });
            return {
              ...old,
              deltaOffset,
              deltaPercentage
            };
          });
          if (table.options.columnResizeMode === "onChange" || eventType === "end") {
            table.setColumnSizing((old) => ({
              ...old,
              ...newColumnSizing
            }));
          }
        };
        const onMove = (clientXPos) => updateOffset("move", clientXPos);
        const onEnd = (clientXPos) => {
          updateOffset("end", clientXPos);
          table.setColumnSizingInfo((old) => ({
            ...old,
            isResizingColumn: false,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        };
        const contextDocument = _contextDocument || typeof document !== "undefined" ? document : null;
        const mouseEvents = {
          moveHandler: (e2) => onMove(e2.clientX),
          upHandler: (e2) => {
            contextDocument == null || contextDocument.removeEventListener("mousemove", mouseEvents.moveHandler);
            contextDocument == null || contextDocument.removeEventListener("mouseup", mouseEvents.upHandler);
            onEnd(e2.clientX);
          }
        };
        const touchEvents = {
          moveHandler: (e2) => {
            if (e2.cancelable) {
              e2.preventDefault();
              e2.stopPropagation();
            }
            onMove(e2.touches[0].clientX);
            return false;
          },
          upHandler: (e2) => {
            var _e$touches$;
            contextDocument == null || contextDocument.removeEventListener("touchmove", touchEvents.moveHandler);
            contextDocument == null || contextDocument.removeEventListener("touchend", touchEvents.upHandler);
            if (e2.cancelable) {
              e2.preventDefault();
              e2.stopPropagation();
            }
            onEnd((_e$touches$ = e2.touches[0]) == null ? void 0 : _e$touches$.clientX);
          }
        };
        const passiveIfSupported = passiveEventSupported() ? {
          passive: false
        } : false;
        if (isTouchStartEvent(e)) {
          contextDocument == null || contextDocument.addEventListener("touchmove", touchEvents.moveHandler, passiveIfSupported);
          contextDocument == null || contextDocument.addEventListener("touchend", touchEvents.upHandler, passiveIfSupported);
        } else {
          contextDocument == null || contextDocument.addEventListener("mousemove", mouseEvents.moveHandler, passiveIfSupported);
          contextDocument == null || contextDocument.addEventListener("mouseup", mouseEvents.upHandler, passiveIfSupported);
        }
        table.setColumnSizingInfo((old) => ({
          ...old,
          startOffset: clientX,
          startSize,
          deltaOffset: 0,
          deltaPercentage: 0,
          columnSizingStart,
          isResizingColumn: column.id
        }));
      };
    };
  },
  createTable: (table) => {
    table.setColumnSizing = (updater) => table.options.onColumnSizingChange == null ? void 0 : table.options.onColumnSizingChange(updater);
    table.setColumnSizingInfo = (updater) => table.options.onColumnSizingInfoChange == null ? void 0 : table.options.onColumnSizingInfoChange(updater);
    table.resetColumnSizing = (defaultState) => {
      var _table$initialState$c;
      table.setColumnSizing(defaultState ? {} : (_table$initialState$c = table.initialState.columnSizing) != null ? _table$initialState$c : {});
    };
    table.resetHeaderSizeInfo = (defaultState) => {
      var _table$initialState$c2;
      table.setColumnSizingInfo(defaultState ? getDefaultColumnSizingInfoState() : (_table$initialState$c2 = table.initialState.columnSizingInfo) != null ? _table$initialState$c2 : getDefaultColumnSizingInfoState());
    };
    table.getTotalSize = () => {
      var _table$getHeaderGroup, _table$getHeaderGroup2;
      return (_table$getHeaderGroup = (_table$getHeaderGroup2 = table.getHeaderGroups()[0]) == null ? void 0 : _table$getHeaderGroup2.headers.reduce((sum2, header) => {
        return sum2 + header.getSize();
      }, 0)) != null ? _table$getHeaderGroup : 0;
    };
    table.getLeftTotalSize = () => {
      var _table$getLeftHeaderG, _table$getLeftHeaderG2;
      return (_table$getLeftHeaderG = (_table$getLeftHeaderG2 = table.getLeftHeaderGroups()[0]) == null ? void 0 : _table$getLeftHeaderG2.headers.reduce((sum2, header) => {
        return sum2 + header.getSize();
      }, 0)) != null ? _table$getLeftHeaderG : 0;
    };
    table.getCenterTotalSize = () => {
      var _table$getCenterHeade, _table$getCenterHeade2;
      return (_table$getCenterHeade = (_table$getCenterHeade2 = table.getCenterHeaderGroups()[0]) == null ? void 0 : _table$getCenterHeade2.headers.reduce((sum2, header) => {
        return sum2 + header.getSize();
      }, 0)) != null ? _table$getCenterHeade : 0;
    };
    table.getRightTotalSize = () => {
      var _table$getRightHeader, _table$getRightHeader2;
      return (_table$getRightHeader = (_table$getRightHeader2 = table.getRightHeaderGroups()[0]) == null ? void 0 : _table$getRightHeader2.headers.reduce((sum2, header) => {
        return sum2 + header.getSize();
      }, 0)) != null ? _table$getRightHeader : 0;
    };
  }
};
var passiveSupported = null;
function passiveEventSupported() {
  if (typeof passiveSupported === "boolean")
    return passiveSupported;
  let supported = false;
  try {
    const options = {
      get passive() {
        supported = true;
        return false;
      }
    };
    const noop = () => {
    };
    window.addEventListener("test", noop, options);
    window.removeEventListener("test", noop);
  } catch (err) {
    supported = false;
  }
  passiveSupported = supported;
  return passiveSupported;
}
function isTouchStartEvent(e) {
  return e.type === "touchstart";
}
var Expanding = {
  getInitialState: (state) => {
    return {
      expanded: {},
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      onExpandedChange: makeStateUpdater("expanded", table),
      paginateExpandedRows: true
    };
  },
  createTable: (table) => {
    let registered = false;
    let queued = false;
    table._autoResetExpanded = () => {
      var _ref, _table$options$autoRe;
      if (!registered) {
        table._queue(() => {
          registered = true;
        });
        return;
      }
      if ((_ref = (_table$options$autoRe = table.options.autoResetAll) != null ? _table$options$autoRe : table.options.autoResetExpanded) != null ? _ref : !table.options.manualExpanding) {
        if (queued)
          return;
        queued = true;
        table._queue(() => {
          table.resetExpanded();
          queued = false;
        });
      }
    };
    table.setExpanded = (updater) => table.options.onExpandedChange == null ? void 0 : table.options.onExpandedChange(updater);
    table.toggleAllRowsExpanded = (expanded) => {
      if (expanded != null ? expanded : !table.getIsAllRowsExpanded()) {
        table.setExpanded(true);
      } else {
        table.setExpanded({});
      }
    };
    table.resetExpanded = (defaultState) => {
      var _table$initialState$e, _table$initialState;
      table.setExpanded(defaultState ? {} : (_table$initialState$e = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.expanded) != null ? _table$initialState$e : {});
    };
    table.getCanSomeRowsExpand = () => {
      return table.getPrePaginationRowModel().flatRows.some((row) => row.getCanExpand());
    };
    table.getToggleAllRowsExpandedHandler = () => {
      return (e) => {
        e.persist == null || e.persist();
        table.toggleAllRowsExpanded();
      };
    };
    table.getIsSomeRowsExpanded = () => {
      const expanded = table.getState().expanded;
      return expanded === true || Object.values(expanded).some(Boolean);
    };
    table.getIsAllRowsExpanded = () => {
      const expanded = table.getState().expanded;
      if (typeof expanded === "boolean") {
        return expanded === true;
      }
      if (!Object.keys(expanded).length) {
        return false;
      }
      if (table.getRowModel().flatRows.some((row) => !row.getIsExpanded())) {
        return false;
      }
      return true;
    };
    table.getExpandedDepth = () => {
      let maxDepth = 0;
      const rowIds = table.getState().expanded === true ? Object.keys(table.getRowModel().rowsById) : Object.keys(table.getState().expanded);
      rowIds.forEach((id) => {
        const splitId = id.split(".");
        maxDepth = Math.max(maxDepth, splitId.length);
      });
      return maxDepth;
    };
    table.getPreExpandedRowModel = () => table.getSortedRowModel();
    table.getExpandedRowModel = () => {
      if (!table._getExpandedRowModel && table.options.getExpandedRowModel) {
        table._getExpandedRowModel = table.options.getExpandedRowModel(table);
      }
      if (table.options.manualExpanding || !table._getExpandedRowModel) {
        return table.getPreExpandedRowModel();
      }
      return table._getExpandedRowModel();
    };
  },
  createRow: (row, table) => {
    row.toggleExpanded = (expanded) => {
      table.setExpanded((old) => {
        var _expanded;
        const exists = old === true ? true : !!(old != null && old[row.id]);
        let oldExpanded = {};
        if (old === true) {
          Object.keys(table.getRowModel().rowsById).forEach((rowId) => {
            oldExpanded[rowId] = true;
          });
        } else {
          oldExpanded = old;
        }
        expanded = (_expanded = expanded) != null ? _expanded : !exists;
        if (!exists && expanded) {
          return {
            ...oldExpanded,
            [row.id]: true
          };
        }
        if (exists && !expanded) {
          const {
            [row.id]: _2,
            ...rest
          } = oldExpanded;
          return rest;
        }
        return old;
      });
    };
    row.getIsExpanded = () => {
      var _table$options$getIsR;
      const expanded = table.getState().expanded;
      return !!((_table$options$getIsR = table.options.getIsRowExpanded == null ? void 0 : table.options.getIsRowExpanded(row)) != null ? _table$options$getIsR : expanded === true || (expanded == null ? void 0 : expanded[row.id]));
    };
    row.getCanExpand = () => {
      var _table$options$getRow, _table$options$enable, _row$subRows;
      return (_table$options$getRow = table.options.getRowCanExpand == null ? void 0 : table.options.getRowCanExpand(row)) != null ? _table$options$getRow : ((_table$options$enable = table.options.enableExpanding) != null ? _table$options$enable : true) && !!((_row$subRows = row.subRows) != null && _row$subRows.length);
    };
    row.getIsAllParentsExpanded = () => {
      let isFullyExpanded = true;
      let currentRow = row;
      while (isFullyExpanded && currentRow.parentId) {
        currentRow = table.getRow(currentRow.parentId, true);
        isFullyExpanded = currentRow.getIsExpanded();
      }
      return isFullyExpanded;
    };
    row.getToggleExpandedHandler = () => {
      const canExpand = row.getCanExpand();
      return () => {
        if (!canExpand)
          return;
        row.toggleExpanded();
      };
    };
  }
};
var includesString = (row, columnId, filterValue) => {
  var _row$getValue;
  const search = filterValue.toLowerCase();
  return Boolean((_row$getValue = row.getValue(columnId)) == null || (_row$getValue = _row$getValue.toString()) == null || (_row$getValue = _row$getValue.toLowerCase()) == null ? void 0 : _row$getValue.includes(search));
};
includesString.autoRemove = (val) => testFalsey(val);
var includesStringSensitive = (row, columnId, filterValue) => {
  var _row$getValue2;
  return Boolean((_row$getValue2 = row.getValue(columnId)) == null || (_row$getValue2 = _row$getValue2.toString()) == null ? void 0 : _row$getValue2.includes(filterValue));
};
includesStringSensitive.autoRemove = (val) => testFalsey(val);
var equalsString = (row, columnId, filterValue) => {
  var _row$getValue3;
  return ((_row$getValue3 = row.getValue(columnId)) == null || (_row$getValue3 = _row$getValue3.toString()) == null ? void 0 : _row$getValue3.toLowerCase()) === (filterValue == null ? void 0 : filterValue.toLowerCase());
};
equalsString.autoRemove = (val) => testFalsey(val);
var arrIncludes = (row, columnId, filterValue) => {
  var _row$getValue4;
  return (_row$getValue4 = row.getValue(columnId)) == null ? void 0 : _row$getValue4.includes(filterValue);
};
arrIncludes.autoRemove = (val) => testFalsey(val) || !(val != null && val.length);
var arrIncludesAll = (row, columnId, filterValue) => {
  return !filterValue.some((val) => {
    var _row$getValue5;
    return !((_row$getValue5 = row.getValue(columnId)) != null && _row$getValue5.includes(val));
  });
};
arrIncludesAll.autoRemove = (val) => testFalsey(val) || !(val != null && val.length);
var arrIncludesSome = (row, columnId, filterValue) => {
  return filterValue.some((val) => {
    var _row$getValue6;
    return (_row$getValue6 = row.getValue(columnId)) == null ? void 0 : _row$getValue6.includes(val);
  });
};
arrIncludesSome.autoRemove = (val) => testFalsey(val) || !(val != null && val.length);
var equals = (row, columnId, filterValue) => {
  return row.getValue(columnId) === filterValue;
};
equals.autoRemove = (val) => testFalsey(val);
var weakEquals = (row, columnId, filterValue) => {
  return row.getValue(columnId) == filterValue;
};
weakEquals.autoRemove = (val) => testFalsey(val);
var inNumberRange = (row, columnId, filterValue) => {
  let [min2, max2] = filterValue;
  const rowValue = row.getValue(columnId);
  return rowValue >= min2 && rowValue <= max2;
};
inNumberRange.resolveFilterValue = (val) => {
  let [unsafeMin, unsafeMax] = val;
  let parsedMin = typeof unsafeMin !== "number" ? parseFloat(unsafeMin) : unsafeMin;
  let parsedMax = typeof unsafeMax !== "number" ? parseFloat(unsafeMax) : unsafeMax;
  let min2 = unsafeMin === null || Number.isNaN(parsedMin) ? -Infinity : parsedMin;
  let max2 = unsafeMax === null || Number.isNaN(parsedMax) ? Infinity : parsedMax;
  if (min2 > max2) {
    const temp = min2;
    min2 = max2;
    max2 = temp;
  }
  return [min2, max2];
};
inNumberRange.autoRemove = (val) => testFalsey(val) || testFalsey(val[0]) && testFalsey(val[1]);
var filterFns = {
  includesString,
  includesStringSensitive,
  equalsString,
  arrIncludes,
  arrIncludesAll,
  arrIncludesSome,
  equals,
  weakEquals,
  inNumberRange
};
function testFalsey(val) {
  return val === void 0 || val === null || val === "";
}
var Filters = {
  getDefaultColumnDef: () => {
    return {
      filterFn: "auto"
    };
  },
  getInitialState: (state) => {
    return {
      columnFilters: [],
      globalFilter: void 0,
      // filtersProgress: 1,
      // facetProgress: {},
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      onColumnFiltersChange: makeStateUpdater("columnFilters", table),
      onGlobalFilterChange: makeStateUpdater("globalFilter", table),
      filterFromLeafRows: false,
      maxLeafRowFilterDepth: 100,
      globalFilterFn: "auto",
      getColumnCanGlobalFilter: (column) => {
        var _table$getCoreRowMode;
        const value = (_table$getCoreRowMode = table.getCoreRowModel().flatRows[0]) == null || (_table$getCoreRowMode = _table$getCoreRowMode._getAllCellsByColumnId()[column.id]) == null ? void 0 : _table$getCoreRowMode.getValue();
        return typeof value === "string" || typeof value === "number";
      }
    };
  },
  createColumn: (column, table) => {
    column.getAutoFilterFn = () => {
      const firstRow = table.getCoreRowModel().flatRows[0];
      const value = firstRow == null ? void 0 : firstRow.getValue(column.id);
      if (typeof value === "string") {
        return filterFns.includesString;
      }
      if (typeof value === "number") {
        return filterFns.inNumberRange;
      }
      if (typeof value === "boolean") {
        return filterFns.equals;
      }
      if (value !== null && typeof value === "object") {
        return filterFns.equals;
      }
      if (Array.isArray(value)) {
        return filterFns.arrIncludes;
      }
      return filterFns.weakEquals;
    };
    column.getFilterFn = () => {
      var _table$options$filter, _table$options$filter2;
      return isFunction(column.columnDef.filterFn) ? column.columnDef.filterFn : column.columnDef.filterFn === "auto" ? column.getAutoFilterFn() : (
        // @ts-ignore
        (_table$options$filter = (_table$options$filter2 = table.options.filterFns) == null ? void 0 : _table$options$filter2[column.columnDef.filterFn]) != null ? _table$options$filter : filterFns[column.columnDef.filterFn]
      );
    };
    column.getCanFilter = () => {
      var _column$columnDef$ena, _table$options$enable, _table$options$enable2;
      return ((_column$columnDef$ena = column.columnDef.enableColumnFilter) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableColumnFilters) != null ? _table$options$enable : true) && ((_table$options$enable2 = table.options.enableFilters) != null ? _table$options$enable2 : true) && !!column.accessorFn;
    };
    column.getCanGlobalFilter = () => {
      var _column$columnDef$ena2, _table$options$enable3, _table$options$enable4, _table$options$getCol;
      return ((_column$columnDef$ena2 = column.columnDef.enableGlobalFilter) != null ? _column$columnDef$ena2 : true) && ((_table$options$enable3 = table.options.enableGlobalFilter) != null ? _table$options$enable3 : true) && ((_table$options$enable4 = table.options.enableFilters) != null ? _table$options$enable4 : true) && ((_table$options$getCol = table.options.getColumnCanGlobalFilter == null ? void 0 : table.options.getColumnCanGlobalFilter(column)) != null ? _table$options$getCol : true) && !!column.accessorFn;
    };
    column.getIsFiltered = () => column.getFilterIndex() > -1;
    column.getFilterValue = () => {
      var _table$getState$colum;
      return (_table$getState$colum = table.getState().columnFilters) == null || (_table$getState$colum = _table$getState$colum.find((d) => d.id === column.id)) == null ? void 0 : _table$getState$colum.value;
    };
    column.getFilterIndex = () => {
      var _table$getState$colum2, _table$getState$colum3;
      return (_table$getState$colum2 = (_table$getState$colum3 = table.getState().columnFilters) == null ? void 0 : _table$getState$colum3.findIndex((d) => d.id === column.id)) != null ? _table$getState$colum2 : -1;
    };
    column.setFilterValue = (value) => {
      table.setColumnFilters((old) => {
        const filterFn = column.getFilterFn();
        const previousfilter = old == null ? void 0 : old.find((d) => d.id === column.id);
        const newFilter = functionalUpdate(value, previousfilter ? previousfilter.value : void 0);
        if (shouldAutoRemoveFilter(filterFn, newFilter, column)) {
          var _old$filter;
          return (_old$filter = old == null ? void 0 : old.filter((d) => d.id !== column.id)) != null ? _old$filter : [];
        }
        const newFilterObj = {
          id: column.id,
          value: newFilter
        };
        if (previousfilter) {
          var _old$map;
          return (_old$map = old == null ? void 0 : old.map((d) => {
            if (d.id === column.id) {
              return newFilterObj;
            }
            return d;
          })) != null ? _old$map : [];
        }
        if (old != null && old.length) {
          return [...old, newFilterObj];
        }
        return [newFilterObj];
      });
    };
    column._getFacetedRowModel = table.options.getFacetedRowModel && table.options.getFacetedRowModel(table, column.id);
    column.getFacetedRowModel = () => {
      if (!column._getFacetedRowModel) {
        return table.getPreFilteredRowModel();
      }
      return column._getFacetedRowModel();
    };
    column._getFacetedUniqueValues = table.options.getFacetedUniqueValues && table.options.getFacetedUniqueValues(table, column.id);
    column.getFacetedUniqueValues = () => {
      if (!column._getFacetedUniqueValues) {
        return /* @__PURE__ */ new Map();
      }
      return column._getFacetedUniqueValues();
    };
    column._getFacetedMinMaxValues = table.options.getFacetedMinMaxValues && table.options.getFacetedMinMaxValues(table, column.id);
    column.getFacetedMinMaxValues = () => {
      if (!column._getFacetedMinMaxValues) {
        return void 0;
      }
      return column._getFacetedMinMaxValues();
    };
  },
  createRow: (row, table) => {
    row.columnFilters = {};
    row.columnFiltersMeta = {};
  },
  createTable: (table) => {
    table.getGlobalAutoFilterFn = () => {
      return filterFns.includesString;
    };
    table.getGlobalFilterFn = () => {
      var _table$options$filter3, _table$options$filter4;
      const {
        globalFilterFn
      } = table.options;
      return isFunction(globalFilterFn) ? globalFilterFn : globalFilterFn === "auto" ? table.getGlobalAutoFilterFn() : (
        // @ts-ignore
        (_table$options$filter3 = (_table$options$filter4 = table.options.filterFns) == null ? void 0 : _table$options$filter4[globalFilterFn]) != null ? _table$options$filter3 : filterFns[globalFilterFn]
      );
    };
    table.setColumnFilters = (updater) => {
      const leafColumns = table.getAllLeafColumns();
      const updateFn = (old) => {
        var _functionalUpdate;
        return (_functionalUpdate = functionalUpdate(updater, old)) == null ? void 0 : _functionalUpdate.filter((filter) => {
          const column = leafColumns.find((d) => d.id === filter.id);
          if (column) {
            const filterFn = column.getFilterFn();
            if (shouldAutoRemoveFilter(filterFn, filter.value, column)) {
              return false;
            }
          }
          return true;
        });
      };
      table.options.onColumnFiltersChange == null || table.options.onColumnFiltersChange(updateFn);
    };
    table.setGlobalFilter = (updater) => {
      table.options.onGlobalFilterChange == null || table.options.onGlobalFilterChange(updater);
    };
    table.resetGlobalFilter = (defaultState) => {
      table.setGlobalFilter(defaultState ? void 0 : table.initialState.globalFilter);
    };
    table.resetColumnFilters = (defaultState) => {
      var _table$initialState$c, _table$initialState;
      table.setColumnFilters(defaultState ? [] : (_table$initialState$c = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.columnFilters) != null ? _table$initialState$c : []);
    };
    table.getPreFilteredRowModel = () => table.getCoreRowModel();
    table.getFilteredRowModel = () => {
      if (!table._getFilteredRowModel && table.options.getFilteredRowModel) {
        table._getFilteredRowModel = table.options.getFilteredRowModel(table);
      }
      if (table.options.manualFiltering || !table._getFilteredRowModel) {
        return table.getPreFilteredRowModel();
      }
      return table._getFilteredRowModel();
    };
    table._getGlobalFacetedRowModel = table.options.getFacetedRowModel && table.options.getFacetedRowModel(table, "__global__");
    table.getGlobalFacetedRowModel = () => {
      if (table.options.manualFiltering || !table._getGlobalFacetedRowModel) {
        return table.getPreFilteredRowModel();
      }
      return table._getGlobalFacetedRowModel();
    };
    table._getGlobalFacetedUniqueValues = table.options.getFacetedUniqueValues && table.options.getFacetedUniqueValues(table, "__global__");
    table.getGlobalFacetedUniqueValues = () => {
      if (!table._getGlobalFacetedUniqueValues) {
        return /* @__PURE__ */ new Map();
      }
      return table._getGlobalFacetedUniqueValues();
    };
    table._getGlobalFacetedMinMaxValues = table.options.getFacetedMinMaxValues && table.options.getFacetedMinMaxValues(table, "__global__");
    table.getGlobalFacetedMinMaxValues = () => {
      if (!table._getGlobalFacetedMinMaxValues) {
        return;
      }
      return table._getGlobalFacetedMinMaxValues();
    };
  }
};
function shouldAutoRemoveFilter(filterFn, value, column) {
  return (filterFn && filterFn.autoRemove ? filterFn.autoRemove(value, column) : false) || typeof value === "undefined" || typeof value === "string" && !value;
}
var sum = (columnId, _leafRows, childRows) => {
  return childRows.reduce((sum2, next) => {
    const nextValue = next.getValue(columnId);
    return sum2 + (typeof nextValue === "number" ? nextValue : 0);
  }, 0);
};
var min = (columnId, _leafRows, childRows) => {
  let min2;
  childRows.forEach((row) => {
    const value = row.getValue(columnId);
    if (value != null && (min2 > value || min2 === void 0 && value >= value)) {
      min2 = value;
    }
  });
  return min2;
};
var max = (columnId, _leafRows, childRows) => {
  let max2;
  childRows.forEach((row) => {
    const value = row.getValue(columnId);
    if (value != null && (max2 < value || max2 === void 0 && value >= value)) {
      max2 = value;
    }
  });
  return max2;
};
var extent = (columnId, _leafRows, childRows) => {
  let min2;
  let max2;
  childRows.forEach((row) => {
    const value = row.getValue(columnId);
    if (value != null) {
      if (min2 === void 0) {
        if (value >= value)
          min2 = max2 = value;
      } else {
        if (min2 > value)
          min2 = value;
        if (max2 < value)
          max2 = value;
      }
    }
  });
  return [min2, max2];
};
var mean = (columnId, leafRows) => {
  let count2 = 0;
  let sum2 = 0;
  leafRows.forEach((row) => {
    let value = row.getValue(columnId);
    if (value != null && (value = +value) >= value) {
      ++count2, sum2 += value;
    }
  });
  if (count2)
    return sum2 / count2;
  return;
};
var median = (columnId, leafRows) => {
  if (!leafRows.length) {
    return;
  }
  const values = leafRows.map((row) => row.getValue(columnId));
  if (!isNumberArray(values)) {
    return;
  }
  if (values.length === 1) {
    return values[0];
  }
  const mid = Math.floor(values.length / 2);
  const nums = values.sort((a2, b) => a2 - b);
  return values.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};
var unique = (columnId, leafRows) => {
  return Array.from(new Set(leafRows.map((d) => d.getValue(columnId))).values());
};
var uniqueCount = (columnId, leafRows) => {
  return new Set(leafRows.map((d) => d.getValue(columnId))).size;
};
var count = (_columnId, leafRows) => {
  return leafRows.length;
};
var aggregationFns = {
  sum,
  min,
  max,
  extent,
  mean,
  median,
  unique,
  uniqueCount,
  count
};
var Grouping = {
  getDefaultColumnDef: () => {
    return {
      aggregatedCell: (props) => {
        var _toString, _props$getValue;
        return (_toString = (_props$getValue = props.getValue()) == null || _props$getValue.toString == null ? void 0 : _props$getValue.toString()) != null ? _toString : null;
      },
      aggregationFn: "auto"
    };
  },
  getInitialState: (state) => {
    return {
      grouping: [],
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      onGroupingChange: makeStateUpdater("grouping", table),
      groupedColumnMode: "reorder"
    };
  },
  createColumn: (column, table) => {
    column.toggleGrouping = () => {
      table.setGrouping((old) => {
        if (old != null && old.includes(column.id)) {
          return old.filter((d) => d !== column.id);
        }
        return [...old != null ? old : [], column.id];
      });
    };
    column.getCanGroup = () => {
      var _ref, _ref2, _ref3, _column$columnDef$ena;
      return (_ref = (_ref2 = (_ref3 = (_column$columnDef$ena = column.columnDef.enableGrouping) != null ? _column$columnDef$ena : true) != null ? _ref3 : table.options.enableGrouping) != null ? _ref2 : true) != null ? _ref : !!column.accessorFn;
    };
    column.getIsGrouped = () => {
      var _table$getState$group;
      return (_table$getState$group = table.getState().grouping) == null ? void 0 : _table$getState$group.includes(column.id);
    };
    column.getGroupedIndex = () => {
      var _table$getState$group2;
      return (_table$getState$group2 = table.getState().grouping) == null ? void 0 : _table$getState$group2.indexOf(column.id);
    };
    column.getToggleGroupingHandler = () => {
      const canGroup = column.getCanGroup();
      return () => {
        if (!canGroup)
          return;
        column.toggleGrouping();
      };
    };
    column.getAutoAggregationFn = () => {
      const firstRow = table.getCoreRowModel().flatRows[0];
      const value = firstRow == null ? void 0 : firstRow.getValue(column.id);
      if (typeof value === "number") {
        return aggregationFns.sum;
      }
      if (Object.prototype.toString.call(value) === "[object Date]") {
        return aggregationFns.extent;
      }
    };
    column.getAggregationFn = () => {
      var _table$options$aggreg, _table$options$aggreg2;
      if (!column) {
        throw new Error();
      }
      return isFunction(column.columnDef.aggregationFn) ? column.columnDef.aggregationFn : column.columnDef.aggregationFn === "auto" ? column.getAutoAggregationFn() : (_table$options$aggreg = (_table$options$aggreg2 = table.options.aggregationFns) == null ? void 0 : _table$options$aggreg2[column.columnDef.aggregationFn]) != null ? _table$options$aggreg : aggregationFns[column.columnDef.aggregationFn];
    };
  },
  createTable: (table) => {
    table.setGrouping = (updater) => table.options.onGroupingChange == null ? void 0 : table.options.onGroupingChange(updater);
    table.resetGrouping = (defaultState) => {
      var _table$initialState$g, _table$initialState;
      table.setGrouping(defaultState ? [] : (_table$initialState$g = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.grouping) != null ? _table$initialState$g : []);
    };
    table.getPreGroupedRowModel = () => table.getFilteredRowModel();
    table.getGroupedRowModel = () => {
      if (!table._getGroupedRowModel && table.options.getGroupedRowModel) {
        table._getGroupedRowModel = table.options.getGroupedRowModel(table);
      }
      if (table.options.manualGrouping || !table._getGroupedRowModel) {
        return table.getPreGroupedRowModel();
      }
      return table._getGroupedRowModel();
    };
  },
  createRow: (row, table) => {
    row.getIsGrouped = () => !!row.groupingColumnId;
    row.getGroupingValue = (columnId) => {
      if (row._groupingValuesCache.hasOwnProperty(columnId)) {
        return row._groupingValuesCache[columnId];
      }
      const column = table.getColumn(columnId);
      if (!(column != null && column.columnDef.getGroupingValue)) {
        return row.getValue(columnId);
      }
      row._groupingValuesCache[columnId] = column.columnDef.getGroupingValue(row.original);
      return row._groupingValuesCache[columnId];
    };
    row._groupingValuesCache = {};
  },
  createCell: (cell, column, row, table) => {
    cell.getIsGrouped = () => column.getIsGrouped() && column.id === row.groupingColumnId;
    cell.getIsPlaceholder = () => !cell.getIsGrouped() && column.getIsGrouped();
    cell.getIsAggregated = () => {
      var _row$subRows;
      return !cell.getIsGrouped() && !cell.getIsPlaceholder() && !!((_row$subRows = row.subRows) != null && _row$subRows.length);
    };
  }
};
function orderColumns(leafColumns, grouping, groupedColumnMode) {
  if (!(grouping != null && grouping.length) || !groupedColumnMode) {
    return leafColumns;
  }
  const nonGroupingColumns = leafColumns.filter((col) => !grouping.includes(col.id));
  if (groupedColumnMode === "remove") {
    return nonGroupingColumns;
  }
  const groupingColumns = grouping.map((g) => leafColumns.find((col) => col.id === g)).filter(Boolean);
  return [...groupingColumns, ...nonGroupingColumns];
}
var Ordering = {
  getInitialState: (state) => {
    return {
      columnOrder: [],
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      onColumnOrderChange: makeStateUpdater("columnOrder", table)
    };
  },
  createTable: (table) => {
    table.setColumnOrder = (updater) => table.options.onColumnOrderChange == null ? void 0 : table.options.onColumnOrderChange(updater);
    table.resetColumnOrder = (defaultState) => {
      var _table$initialState$c;
      table.setColumnOrder(defaultState ? [] : (_table$initialState$c = table.initialState.columnOrder) != null ? _table$initialState$c : []);
    };
    table._getOrderColumnsFn = memo(() => [table.getState().columnOrder, table.getState().grouping, table.options.groupedColumnMode], (columnOrder, grouping, groupedColumnMode) => (columns2) => {
      let orderedColumns = [];
      if (!(columnOrder != null && columnOrder.length)) {
        orderedColumns = columns2;
      } else {
        const columnOrderCopy = [...columnOrder];
        const columnsCopy = [...columns2];
        while (columnsCopy.length && columnOrderCopy.length) {
          const targetColumnId = columnOrderCopy.shift();
          const foundIndex = columnsCopy.findIndex((d) => d.id === targetColumnId);
          if (foundIndex > -1) {
            orderedColumns.push(columnsCopy.splice(foundIndex, 1)[0]);
          }
        }
        orderedColumns = [...orderedColumns, ...columnsCopy];
      }
      return orderColumns(orderedColumns, grouping, groupedColumnMode);
    }, {
      key: "getOrderColumnsFn"
      // debug: () => table.options.debugAll ?? table.options.debugTable,
    });
  }
};
var defaultPageIndex = 0;
var defaultPageSize = 10;
var getDefaultPaginationState = () => ({
  pageIndex: defaultPageIndex,
  pageSize: defaultPageSize
});
var Pagination = {
  getInitialState: (state) => {
    return {
      ...state,
      pagination: {
        ...getDefaultPaginationState(),
        ...state == null ? void 0 : state.pagination
      }
    };
  },
  getDefaultOptions: (table) => {
    return {
      onPaginationChange: makeStateUpdater("pagination", table)
    };
  },
  createTable: (table) => {
    let registered = false;
    let queued = false;
    table._autoResetPageIndex = () => {
      var _ref, _table$options$autoRe;
      if (!registered) {
        table._queue(() => {
          registered = true;
        });
        return;
      }
      if ((_ref = (_table$options$autoRe = table.options.autoResetAll) != null ? _table$options$autoRe : table.options.autoResetPageIndex) != null ? _ref : !table.options.manualPagination) {
        if (queued)
          return;
        queued = true;
        table._queue(() => {
          table.resetPageIndex();
          queued = false;
        });
      }
    };
    table.setPagination = (updater) => {
      const safeUpdater = (old) => {
        let newState = functionalUpdate(updater, old);
        return newState;
      };
      return table.options.onPaginationChange == null ? void 0 : table.options.onPaginationChange(safeUpdater);
    };
    table.resetPagination = (defaultState) => {
      var _table$initialState$p;
      table.setPagination(defaultState ? getDefaultPaginationState() : (_table$initialState$p = table.initialState.pagination) != null ? _table$initialState$p : getDefaultPaginationState());
    };
    table.setPageIndex = (updater) => {
      table.setPagination((old) => {
        let pageIndex = functionalUpdate(updater, old.pageIndex);
        const maxPageIndex = typeof table.options.pageCount === "undefined" || table.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : table.options.pageCount - 1;
        pageIndex = Math.max(0, Math.min(pageIndex, maxPageIndex));
        return {
          ...old,
          pageIndex
        };
      });
    };
    table.resetPageIndex = (defaultState) => {
      var _table$initialState$p2, _table$initialState;
      table.setPageIndex(defaultState ? defaultPageIndex : (_table$initialState$p2 = (_table$initialState = table.initialState) == null || (_table$initialState = _table$initialState.pagination) == null ? void 0 : _table$initialState.pageIndex) != null ? _table$initialState$p2 : defaultPageIndex);
    };
    table.resetPageSize = (defaultState) => {
      var _table$initialState$p3, _table$initialState2;
      table.setPageSize(defaultState ? defaultPageSize : (_table$initialState$p3 = (_table$initialState2 = table.initialState) == null || (_table$initialState2 = _table$initialState2.pagination) == null ? void 0 : _table$initialState2.pageSize) != null ? _table$initialState$p3 : defaultPageSize);
    };
    table.setPageSize = (updater) => {
      table.setPagination((old) => {
        const pageSize = Math.max(1, functionalUpdate(updater, old.pageSize));
        const topRowIndex = old.pageSize * old.pageIndex;
        const pageIndex = Math.floor(topRowIndex / pageSize);
        return {
          ...old,
          pageIndex,
          pageSize
        };
      });
    };
    table.setPageCount = (updater) => table.setPagination((old) => {
      var _table$options$pageCo;
      let newPageCount = functionalUpdate(updater, (_table$options$pageCo = table.options.pageCount) != null ? _table$options$pageCo : -1);
      if (typeof newPageCount === "number") {
        newPageCount = Math.max(-1, newPageCount);
      }
      return {
        ...old,
        pageCount: newPageCount
      };
    });
    table.getPageOptions = memo(() => [table.getPageCount()], (pageCount) => {
      let pageOptions = [];
      if (pageCount && pageCount > 0) {
        pageOptions = [...new Array(pageCount)].fill(null).map((_2, i) => i);
      }
      return pageOptions;
    }, {
      key: "getPageOptions",
      debug: () => {
        var _table$options$debugA;
        return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
      }
    });
    table.getCanPreviousPage = () => table.getState().pagination.pageIndex > 0;
    table.getCanNextPage = () => {
      const {
        pageIndex
      } = table.getState().pagination;
      const pageCount = table.getPageCount();
      if (pageCount === -1) {
        return true;
      }
      if (pageCount === 0) {
        return false;
      }
      return pageIndex < pageCount - 1;
    };
    table.previousPage = () => {
      return table.setPageIndex((old) => old - 1);
    };
    table.nextPage = () => {
      return table.setPageIndex((old) => {
        return old + 1;
      });
    };
    table.getPrePaginationRowModel = () => table.getExpandedRowModel();
    table.getPaginationRowModel = () => {
      if (!table._getPaginationRowModel && table.options.getPaginationRowModel) {
        table._getPaginationRowModel = table.options.getPaginationRowModel(table);
      }
      if (table.options.manualPagination || !table._getPaginationRowModel) {
        return table.getPrePaginationRowModel();
      }
      return table._getPaginationRowModel();
    };
    table.getPageCount = () => {
      var _table$options$pageCo2;
      return (_table$options$pageCo2 = table.options.pageCount) != null ? _table$options$pageCo2 : Math.ceil(table.getPrePaginationRowModel().rows.length / table.getState().pagination.pageSize);
    };
  }
};
var getDefaultColumnPinningState = () => ({
  left: [],
  right: []
});
var getDefaultRowPinningState = () => ({
  top: [],
  bottom: []
});
var Pinning = {
  getInitialState: (state) => {
    return {
      columnPinning: getDefaultColumnPinningState(),
      rowPinning: getDefaultRowPinningState(),
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      onColumnPinningChange: makeStateUpdater("columnPinning", table),
      onRowPinningChange: makeStateUpdater("rowPinning", table)
    };
  },
  createColumn: (column, table) => {
    column.pin = (position) => {
      const columnIds = column.getLeafColumns().map((d) => d.id).filter(Boolean);
      table.setColumnPinning((old) => {
        var _old$left3, _old$right3;
        if (position === "right") {
          var _old$left, _old$right;
          return {
            left: ((_old$left = old == null ? void 0 : old.left) != null ? _old$left : []).filter((d) => !(columnIds != null && columnIds.includes(d))),
            right: [...((_old$right = old == null ? void 0 : old.right) != null ? _old$right : []).filter((d) => !(columnIds != null && columnIds.includes(d))), ...columnIds]
          };
        }
        if (position === "left") {
          var _old$left2, _old$right2;
          return {
            left: [...((_old$left2 = old == null ? void 0 : old.left) != null ? _old$left2 : []).filter((d) => !(columnIds != null && columnIds.includes(d))), ...columnIds],
            right: ((_old$right2 = old == null ? void 0 : old.right) != null ? _old$right2 : []).filter((d) => !(columnIds != null && columnIds.includes(d)))
          };
        }
        return {
          left: ((_old$left3 = old == null ? void 0 : old.left) != null ? _old$left3 : []).filter((d) => !(columnIds != null && columnIds.includes(d))),
          right: ((_old$right3 = old == null ? void 0 : old.right) != null ? _old$right3 : []).filter((d) => !(columnIds != null && columnIds.includes(d)))
        };
      });
    };
    column.getCanPin = () => {
      const leafColumns = column.getLeafColumns();
      return leafColumns.some((d) => {
        var _d$columnDef$enablePi, _ref, _table$options$enable;
        return ((_d$columnDef$enablePi = d.columnDef.enablePinning) != null ? _d$columnDef$enablePi : true) && ((_ref = (_table$options$enable = table.options.enableColumnPinning) != null ? _table$options$enable : table.options.enablePinning) != null ? _ref : true);
      });
    };
    column.getIsPinned = () => {
      const leafColumnIds = column.getLeafColumns().map((d) => d.id);
      const {
        left,
        right
      } = table.getState().columnPinning;
      const isLeft = leafColumnIds.some((d) => left == null ? void 0 : left.includes(d));
      const isRight = leafColumnIds.some((d) => right == null ? void 0 : right.includes(d));
      return isLeft ? "left" : isRight ? "right" : false;
    };
    column.getPinnedIndex = () => {
      var _table$getState$colum, _table$getState$colum2;
      const position = column.getIsPinned();
      return position ? (_table$getState$colum = (_table$getState$colum2 = table.getState().columnPinning) == null || (_table$getState$colum2 = _table$getState$colum2[position]) == null ? void 0 : _table$getState$colum2.indexOf(column.id)) != null ? _table$getState$colum : -1 : 0;
    };
  },
  createRow: (row, table) => {
    row.pin = (position, includeLeafRows, includeParentRows) => {
      const leafRowIds = includeLeafRows ? row.getLeafRows().map((_ref2) => {
        let {
          id
        } = _ref2;
        return id;
      }) : [];
      const parentRowIds = includeParentRows ? row.getParentRows().map((_ref3) => {
        let {
          id
        } = _ref3;
        return id;
      }) : [];
      const rowIds = /* @__PURE__ */ new Set([...parentRowIds, row.id, ...leafRowIds]);
      table.setRowPinning((old) => {
        var _old$top3, _old$bottom3;
        if (position === "bottom") {
          var _old$top, _old$bottom;
          return {
            top: ((_old$top = old == null ? void 0 : old.top) != null ? _old$top : []).filter((d) => !(rowIds != null && rowIds.has(d))),
            bottom: [...((_old$bottom = old == null ? void 0 : old.bottom) != null ? _old$bottom : []).filter((d) => !(rowIds != null && rowIds.has(d))), ...Array.from(rowIds)]
          };
        }
        if (position === "top") {
          var _old$top2, _old$bottom2;
          return {
            top: [...((_old$top2 = old == null ? void 0 : old.top) != null ? _old$top2 : []).filter((d) => !(rowIds != null && rowIds.has(d))), ...Array.from(rowIds)],
            bottom: ((_old$bottom2 = old == null ? void 0 : old.bottom) != null ? _old$bottom2 : []).filter((d) => !(rowIds != null && rowIds.has(d)))
          };
        }
        return {
          top: ((_old$top3 = old == null ? void 0 : old.top) != null ? _old$top3 : []).filter((d) => !(rowIds != null && rowIds.has(d))),
          bottom: ((_old$bottom3 = old == null ? void 0 : old.bottom) != null ? _old$bottom3 : []).filter((d) => !(rowIds != null && rowIds.has(d)))
        };
      });
    };
    row.getCanPin = () => {
      var _ref4;
      const {
        enableRowPinning,
        enablePinning
      } = table.options;
      if (typeof enableRowPinning === "function") {
        return enableRowPinning(row);
      }
      return (_ref4 = enableRowPinning != null ? enableRowPinning : enablePinning) != null ? _ref4 : true;
    };
    row.getIsPinned = () => {
      const rowIds = [row.id];
      const {
        top,
        bottom
      } = table.getState().rowPinning;
      const isTop = rowIds.some((d) => top == null ? void 0 : top.includes(d));
      const isBottom = rowIds.some((d) => bottom == null ? void 0 : bottom.includes(d));
      return isTop ? "top" : isBottom ? "bottom" : false;
    };
    row.getPinnedIndex = () => {
      var _table$_getPinnedRows, _visiblePinnedRowIds$;
      const position = row.getIsPinned();
      if (!position)
        return -1;
      const visiblePinnedRowIds = (_table$_getPinnedRows = table._getPinnedRows(position)) == null ? void 0 : _table$_getPinnedRows.map((_ref5) => {
        let {
          id
        } = _ref5;
        return id;
      });
      return (_visiblePinnedRowIds$ = visiblePinnedRowIds == null ? void 0 : visiblePinnedRowIds.indexOf(row.id)) != null ? _visiblePinnedRowIds$ : -1;
    };
    row.getCenterVisibleCells = memo(() => [row._getAllVisibleCells(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allCells, left, right) => {
      const leftAndRight = [...left != null ? left : [], ...right != null ? right : []];
      return allCells.filter((d) => !leftAndRight.includes(d.column.id));
    }, {
      key: "row.getCenterVisibleCells",
      debug: () => {
        var _table$options$debugA;
        return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugRows;
      }
    });
    row.getLeftVisibleCells = memo(() => [row._getAllVisibleCells(), table.getState().columnPinning.left, ,], (allCells, left) => {
      const cells = (left != null ? left : []).map((columnId) => allCells.find((cell) => cell.column.id === columnId)).filter(Boolean).map((d) => ({
        ...d,
        position: "left"
      }));
      return cells;
    }, {
      key: "row.getLeftVisibleCells",
      debug: () => {
        var _table$options$debugA2;
        return (_table$options$debugA2 = table.options.debugAll) != null ? _table$options$debugA2 : table.options.debugRows;
      }
    });
    row.getRightVisibleCells = memo(() => [row._getAllVisibleCells(), table.getState().columnPinning.right], (allCells, right) => {
      const cells = (right != null ? right : []).map((columnId) => allCells.find((cell) => cell.column.id === columnId)).filter(Boolean).map((d) => ({
        ...d,
        position: "right"
      }));
      return cells;
    }, {
      key: "row.getRightVisibleCells",
      debug: () => {
        var _table$options$debugA3;
        return (_table$options$debugA3 = table.options.debugAll) != null ? _table$options$debugA3 : table.options.debugRows;
      }
    });
  },
  createTable: (table) => {
    table.setColumnPinning = (updater) => table.options.onColumnPinningChange == null ? void 0 : table.options.onColumnPinningChange(updater);
    table.resetColumnPinning = (defaultState) => {
      var _table$initialState$c, _table$initialState;
      return table.setColumnPinning(defaultState ? getDefaultColumnPinningState() : (_table$initialState$c = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.columnPinning) != null ? _table$initialState$c : getDefaultColumnPinningState());
    };
    table.getIsSomeColumnsPinned = (position) => {
      var _pinningState$positio;
      const pinningState = table.getState().columnPinning;
      if (!position) {
        var _pinningState$left, _pinningState$right;
        return Boolean(((_pinningState$left = pinningState.left) == null ? void 0 : _pinningState$left.length) || ((_pinningState$right = pinningState.right) == null ? void 0 : _pinningState$right.length));
      }
      return Boolean((_pinningState$positio = pinningState[position]) == null ? void 0 : _pinningState$positio.length);
    };
    table.getLeftLeafColumns = memo(() => [table.getAllLeafColumns(), table.getState().columnPinning.left], (allColumns, left) => {
      return (left != null ? left : []).map((columnId) => allColumns.find((column) => column.id === columnId)).filter(Boolean);
    }, {
      key: "getLeftLeafColumns",
      debug: () => {
        var _table$options$debugA4;
        return (_table$options$debugA4 = table.options.debugAll) != null ? _table$options$debugA4 : table.options.debugColumns;
      }
    });
    table.getRightLeafColumns = memo(() => [table.getAllLeafColumns(), table.getState().columnPinning.right], (allColumns, right) => {
      return (right != null ? right : []).map((columnId) => allColumns.find((column) => column.id === columnId)).filter(Boolean);
    }, {
      key: "getRightLeafColumns",
      debug: () => {
        var _table$options$debugA5;
        return (_table$options$debugA5 = table.options.debugAll) != null ? _table$options$debugA5 : table.options.debugColumns;
      }
    });
    table.getCenterLeafColumns = memo(() => [table.getAllLeafColumns(), table.getState().columnPinning.left, table.getState().columnPinning.right], (allColumns, left, right) => {
      const leftAndRight = [...left != null ? left : [], ...right != null ? right : []];
      return allColumns.filter((d) => !leftAndRight.includes(d.id));
    }, {
      key: "getCenterLeafColumns",
      debug: () => {
        var _table$options$debugA6;
        return (_table$options$debugA6 = table.options.debugAll) != null ? _table$options$debugA6 : table.options.debugColumns;
      }
    });
    table.setRowPinning = (updater) => table.options.onRowPinningChange == null ? void 0 : table.options.onRowPinningChange(updater);
    table.resetRowPinning = (defaultState) => {
      var _table$initialState$r, _table$initialState2;
      return table.setRowPinning(defaultState ? getDefaultRowPinningState() : (_table$initialState$r = (_table$initialState2 = table.initialState) == null ? void 0 : _table$initialState2.rowPinning) != null ? _table$initialState$r : getDefaultRowPinningState());
    };
    table.getIsSomeRowsPinned = (position) => {
      var _pinningState$positio2;
      const pinningState = table.getState().rowPinning;
      if (!position) {
        var _pinningState$top, _pinningState$bottom;
        return Boolean(((_pinningState$top = pinningState.top) == null ? void 0 : _pinningState$top.length) || ((_pinningState$bottom = pinningState.bottom) == null ? void 0 : _pinningState$bottom.length));
      }
      return Boolean((_pinningState$positio2 = pinningState[position]) == null ? void 0 : _pinningState$positio2.length);
    };
    table._getPinnedRows = (position) => memo(() => [table.getRowModel().rows, table.getState().rowPinning[position]], (visibleRows, pinnedRowIds) => {
      var _table$options$keepPi;
      const rows = ((_table$options$keepPi = table.options.keepPinnedRows) != null ? _table$options$keepPi : true) ? (
        //get all rows that are pinned even if they would not be otherwise visible
        //account for expanded parent rows, but not pagination or filtering
        (pinnedRowIds != null ? pinnedRowIds : []).map((rowId) => {
          const row = table.getRow(rowId, true);
          return row.getIsAllParentsExpanded() ? row : null;
        })
      ) : (
        //else get only visible rows that are pinned
        (pinnedRowIds != null ? pinnedRowIds : []).map((rowId) => visibleRows.find((row) => row.id === rowId))
      );
      return rows.filter(Boolean).map((d) => ({
        ...d,
        position
      }));
    }, {
      key: `row.get${position === "top" ? "Top" : "Bottom"}Rows`,
      debug: () => {
        var _table$options$debugA7;
        return (_table$options$debugA7 = table.options.debugAll) != null ? _table$options$debugA7 : table.options.debugRows;
      }
    })();
    table.getTopRows = () => table._getPinnedRows("top");
    table.getBottomRows = () => table._getPinnedRows("bottom");
    table.getCenterRows = memo(() => [table.getRowModel().rows, table.getState().rowPinning.top, table.getState().rowPinning.bottom], (allRows, top, bottom) => {
      const topAndBottom = /* @__PURE__ */ new Set([...top != null ? top : [], ...bottom != null ? bottom : []]);
      return allRows.filter((d) => !topAndBottom.has(d.id));
    }, {
      key: "row.getCenterRows",
      debug: () => {
        var _table$options$debugA8;
        return (_table$options$debugA8 = table.options.debugAll) != null ? _table$options$debugA8 : table.options.debugRows;
      }
    });
  }
};
var RowSelection = {
  getInitialState: (state) => {
    return {
      rowSelection: {},
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      onRowSelectionChange: makeStateUpdater("rowSelection", table),
      enableRowSelection: true,
      enableMultiRowSelection: true,
      enableSubRowSelection: true
      // enableGroupingRowSelection: false,
      // isAdditiveSelectEvent: (e: unknown) => !!e.metaKey,
      // isInclusiveSelectEvent: (e: unknown) => !!e.shiftKey,
    };
  },
  createTable: (table) => {
    table.setRowSelection = (updater) => table.options.onRowSelectionChange == null ? void 0 : table.options.onRowSelectionChange(updater);
    table.resetRowSelection = (defaultState) => {
      var _table$initialState$r;
      return table.setRowSelection(defaultState ? {} : (_table$initialState$r = table.initialState.rowSelection) != null ? _table$initialState$r : {});
    };
    table.toggleAllRowsSelected = (value) => {
      table.setRowSelection((old) => {
        value = typeof value !== "undefined" ? value : !table.getIsAllRowsSelected();
        const rowSelection = {
          ...old
        };
        const preGroupedFlatRows = table.getPreGroupedRowModel().flatRows;
        if (value) {
          preGroupedFlatRows.forEach((row) => {
            if (!row.getCanSelect()) {
              return;
            }
            rowSelection[row.id] = true;
          });
        } else {
          preGroupedFlatRows.forEach((row) => {
            delete rowSelection[row.id];
          });
        }
        return rowSelection;
      });
    };
    table.toggleAllPageRowsSelected = (value) => table.setRowSelection((old) => {
      const resolvedValue = typeof value !== "undefined" ? value : !table.getIsAllPageRowsSelected();
      const rowSelection = {
        ...old
      };
      table.getRowModel().rows.forEach((row) => {
        mutateRowIsSelected(rowSelection, row.id, resolvedValue, true, table);
      });
      return rowSelection;
    });
    table.getPreSelectedRowModel = () => table.getCoreRowModel();
    table.getSelectedRowModel = memo(() => [table.getState().rowSelection, table.getCoreRowModel()], (rowSelection, rowModel) => {
      if (!Object.keys(rowSelection).length) {
        return {
          rows: [],
          flatRows: [],
          rowsById: {}
        };
      }
      return selectRowsFn(table, rowModel);
    }, {
      key: "getSelectedRowModel",
      debug: () => {
        var _table$options$debugA;
        return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
      }
    });
    table.getFilteredSelectedRowModel = memo(() => [table.getState().rowSelection, table.getFilteredRowModel()], (rowSelection, rowModel) => {
      if (!Object.keys(rowSelection).length) {
        return {
          rows: [],
          flatRows: [],
          rowsById: {}
        };
      }
      return selectRowsFn(table, rowModel);
    }, {
      key: false,
      debug: () => {
        var _table$options$debugA2;
        return (_table$options$debugA2 = table.options.debugAll) != null ? _table$options$debugA2 : table.options.debugTable;
      }
    });
    table.getGroupedSelectedRowModel = memo(() => [table.getState().rowSelection, table.getSortedRowModel()], (rowSelection, rowModel) => {
      if (!Object.keys(rowSelection).length) {
        return {
          rows: [],
          flatRows: [],
          rowsById: {}
        };
      }
      return selectRowsFn(table, rowModel);
    }, {
      key: false,
      debug: () => {
        var _table$options$debugA3;
        return (_table$options$debugA3 = table.options.debugAll) != null ? _table$options$debugA3 : table.options.debugTable;
      }
    });
    table.getIsAllRowsSelected = () => {
      const preGroupedFlatRows = table.getFilteredRowModel().flatRows;
      const {
        rowSelection
      } = table.getState();
      let isAllRowsSelected = Boolean(preGroupedFlatRows.length && Object.keys(rowSelection).length);
      if (isAllRowsSelected) {
        if (preGroupedFlatRows.some((row) => row.getCanSelect() && !rowSelection[row.id])) {
          isAllRowsSelected = false;
        }
      }
      return isAllRowsSelected;
    };
    table.getIsAllPageRowsSelected = () => {
      const paginationFlatRows = table.getPaginationRowModel().flatRows.filter((row) => row.getCanSelect());
      const {
        rowSelection
      } = table.getState();
      let isAllPageRowsSelected = !!paginationFlatRows.length;
      if (isAllPageRowsSelected && paginationFlatRows.some((row) => !rowSelection[row.id])) {
        isAllPageRowsSelected = false;
      }
      return isAllPageRowsSelected;
    };
    table.getIsSomeRowsSelected = () => {
      var _table$getState$rowSe;
      const totalSelected = Object.keys((_table$getState$rowSe = table.getState().rowSelection) != null ? _table$getState$rowSe : {}).length;
      return totalSelected > 0 && totalSelected < table.getFilteredRowModel().flatRows.length;
    };
    table.getIsSomePageRowsSelected = () => {
      const paginationFlatRows = table.getPaginationRowModel().flatRows;
      return table.getIsAllPageRowsSelected() ? false : paginationFlatRows.filter((row) => row.getCanSelect()).some((d) => d.getIsSelected() || d.getIsSomeSelected());
    };
    table.getToggleAllRowsSelectedHandler = () => {
      return (e) => {
        table.toggleAllRowsSelected(e.target.checked);
      };
    };
    table.getToggleAllPageRowsSelectedHandler = () => {
      return (e) => {
        table.toggleAllPageRowsSelected(e.target.checked);
      };
    };
  },
  createRow: (row, table) => {
    row.toggleSelected = (value, opts) => {
      const isSelected = row.getIsSelected();
      table.setRowSelection((old) => {
        var _opts$selectChildren;
        value = typeof value !== "undefined" ? value : !isSelected;
        if (row.getCanSelect() && isSelected === value) {
          return old;
        }
        const selectedRowIds = {
          ...old
        };
        mutateRowIsSelected(selectedRowIds, row.id, value, (_opts$selectChildren = opts == null ? void 0 : opts.selectChildren) != null ? _opts$selectChildren : true, table);
        return selectedRowIds;
      });
    };
    row.getIsSelected = () => {
      const {
        rowSelection
      } = table.getState();
      return isRowSelected(row, rowSelection);
    };
    row.getIsSomeSelected = () => {
      const {
        rowSelection
      } = table.getState();
      return isSubRowSelected(row, rowSelection) === "some";
    };
    row.getIsAllSubRowsSelected = () => {
      const {
        rowSelection
      } = table.getState();
      return isSubRowSelected(row, rowSelection) === "all";
    };
    row.getCanSelect = () => {
      var _table$options$enable;
      if (typeof table.options.enableRowSelection === "function") {
        return table.options.enableRowSelection(row);
      }
      return (_table$options$enable = table.options.enableRowSelection) != null ? _table$options$enable : true;
    };
    row.getCanSelectSubRows = () => {
      var _table$options$enable2;
      if (typeof table.options.enableSubRowSelection === "function") {
        return table.options.enableSubRowSelection(row);
      }
      return (_table$options$enable2 = table.options.enableSubRowSelection) != null ? _table$options$enable2 : true;
    };
    row.getCanMultiSelect = () => {
      var _table$options$enable3;
      if (typeof table.options.enableMultiRowSelection === "function") {
        return table.options.enableMultiRowSelection(row);
      }
      return (_table$options$enable3 = table.options.enableMultiRowSelection) != null ? _table$options$enable3 : true;
    };
    row.getToggleSelectedHandler = () => {
      const canSelect = row.getCanSelect();
      return (e) => {
        var _target;
        if (!canSelect)
          return;
        row.toggleSelected((_target = e.target) == null ? void 0 : _target.checked);
      };
    };
  }
};
var mutateRowIsSelected = (selectedRowIds, id, value, includeChildren, table) => {
  var _row$subRows;
  const row = table.getRow(id, true);
  if (value) {
    if (!row.getCanMultiSelect()) {
      Object.keys(selectedRowIds).forEach((key) => delete selectedRowIds[key]);
    }
    if (row.getCanSelect()) {
      selectedRowIds[id] = true;
    }
  } else {
    delete selectedRowIds[id];
  }
  if (includeChildren && (_row$subRows = row.subRows) != null && _row$subRows.length && row.getCanSelectSubRows()) {
    row.subRows.forEach((row2) => mutateRowIsSelected(selectedRowIds, row2.id, value, includeChildren, table));
  }
};
function selectRowsFn(table, rowModel) {
  const rowSelection = table.getState().rowSelection;
  const newSelectedFlatRows = [];
  const newSelectedRowsById = {};
  const recurseRows = function(rows, depth) {
    return rows.map((row) => {
      var _row$subRows2;
      const isSelected = isRowSelected(row, rowSelection);
      if (isSelected) {
        newSelectedFlatRows.push(row);
        newSelectedRowsById[row.id] = row;
      }
      if ((_row$subRows2 = row.subRows) != null && _row$subRows2.length) {
        row = {
          ...row,
          subRows: recurseRows(row.subRows)
        };
      }
      if (isSelected) {
        return row;
      }
    }).filter(Boolean);
  };
  return {
    rows: recurseRows(rowModel.rows),
    flatRows: newSelectedFlatRows,
    rowsById: newSelectedRowsById
  };
}
function isRowSelected(row, selection) {
  var _selection$row$id;
  return (_selection$row$id = selection[row.id]) != null ? _selection$row$id : false;
}
function isSubRowSelected(row, selection, table) {
  var _row$subRows3;
  if (!((_row$subRows3 = row.subRows) != null && _row$subRows3.length))
    return false;
  let allChildrenSelected = true;
  let someSelected = false;
  row.subRows.forEach((subRow) => {
    if (someSelected && !allChildrenSelected) {
      return;
    }
    if (subRow.getCanSelect()) {
      if (isRowSelected(subRow, selection)) {
        someSelected = true;
      } else {
        allChildrenSelected = false;
      }
    }
    if (subRow.subRows && subRow.subRows.length) {
      const subRowChildrenSelected = isSubRowSelected(subRow, selection);
      if (subRowChildrenSelected === "all") {
        someSelected = true;
      } else if (subRowChildrenSelected === "some") {
        someSelected = true;
        allChildrenSelected = false;
      } else {
        allChildrenSelected = false;
      }
    }
  });
  return allChildrenSelected ? "all" : someSelected ? "some" : false;
}
var reSplitAlphaNumeric = /([0-9]+)/gm;
var alphanumeric = (rowA, rowB, columnId) => {
  return compareAlphanumeric(toString(rowA.getValue(columnId)).toLowerCase(), toString(rowB.getValue(columnId)).toLowerCase());
};
var alphanumericCaseSensitive = (rowA, rowB, columnId) => {
  return compareAlphanumeric(toString(rowA.getValue(columnId)), toString(rowB.getValue(columnId)));
};
var text = (rowA, rowB, columnId) => {
  return compareBasic(toString(rowA.getValue(columnId)).toLowerCase(), toString(rowB.getValue(columnId)).toLowerCase());
};
var textCaseSensitive = (rowA, rowB, columnId) => {
  return compareBasic(toString(rowA.getValue(columnId)), toString(rowB.getValue(columnId)));
};
var datetime = (rowA, rowB, columnId) => {
  const a2 = rowA.getValue(columnId);
  const b = rowB.getValue(columnId);
  return a2 > b ? 1 : a2 < b ? -1 : 0;
};
var basic = (rowA, rowB, columnId) => {
  return compareBasic(rowA.getValue(columnId), rowB.getValue(columnId));
};
function compareBasic(a2, b) {
  return a2 === b ? 0 : a2 > b ? 1 : -1;
}
function toString(a2) {
  if (typeof a2 === "number") {
    if (isNaN(a2) || a2 === Infinity || a2 === -Infinity) {
      return "";
    }
    return String(a2);
  }
  if (typeof a2 === "string") {
    return a2;
  }
  return "";
}
function compareAlphanumeric(aStr, bStr) {
  const a2 = aStr.split(reSplitAlphaNumeric).filter(Boolean);
  const b = bStr.split(reSplitAlphaNumeric).filter(Boolean);
  while (a2.length && b.length) {
    const aa = a2.shift();
    const bb = b.shift();
    const an = parseInt(aa, 10);
    const bn = parseInt(bb, 10);
    const combo = [an, bn].sort();
    if (isNaN(combo[0])) {
      if (aa > bb) {
        return 1;
      }
      if (bb > aa) {
        return -1;
      }
      continue;
    }
    if (isNaN(combo[1])) {
      return isNaN(an) ? -1 : 1;
    }
    if (an > bn) {
      return 1;
    }
    if (bn > an) {
      return -1;
    }
  }
  return a2.length - b.length;
}
var sortingFns = {
  alphanumeric,
  alphanumericCaseSensitive,
  text,
  textCaseSensitive,
  datetime,
  basic
};
var Sorting = {
  getInitialState: (state) => {
    return {
      sorting: [],
      ...state
    };
  },
  getDefaultColumnDef: () => {
    return {
      sortingFn: "auto",
      sortUndefined: 1
    };
  },
  getDefaultOptions: (table) => {
    return {
      onSortingChange: makeStateUpdater("sorting", table),
      isMultiSortEvent: (e) => {
        return e.shiftKey;
      }
    };
  },
  createColumn: (column, table) => {
    column.getAutoSortingFn = () => {
      const firstRows = table.getFilteredRowModel().flatRows.slice(10);
      let isString = false;
      for (const row of firstRows) {
        const value = row == null ? void 0 : row.getValue(column.id);
        if (Object.prototype.toString.call(value) === "[object Date]") {
          return sortingFns.datetime;
        }
        if (typeof value === "string") {
          isString = true;
          if (value.split(reSplitAlphaNumeric).length > 1) {
            return sortingFns.alphanumeric;
          }
        }
      }
      if (isString) {
        return sortingFns.text;
      }
      return sortingFns.basic;
    };
    column.getAutoSortDir = () => {
      const firstRow = table.getFilteredRowModel().flatRows[0];
      const value = firstRow == null ? void 0 : firstRow.getValue(column.id);
      if (typeof value === "string") {
        return "asc";
      }
      return "desc";
    };
    column.getSortingFn = () => {
      var _table$options$sortin, _table$options$sortin2;
      if (!column) {
        throw new Error();
      }
      return isFunction(column.columnDef.sortingFn) ? column.columnDef.sortingFn : column.columnDef.sortingFn === "auto" ? column.getAutoSortingFn() : (_table$options$sortin = (_table$options$sortin2 = table.options.sortingFns) == null ? void 0 : _table$options$sortin2[column.columnDef.sortingFn]) != null ? _table$options$sortin : sortingFns[column.columnDef.sortingFn];
    };
    column.toggleSorting = (desc, multi) => {
      const nextSortingOrder = column.getNextSortingOrder();
      const hasManualValue = typeof desc !== "undefined" && desc !== null;
      table.setSorting((old) => {
        const existingSorting = old == null ? void 0 : old.find((d) => d.id === column.id);
        const existingIndex = old == null ? void 0 : old.findIndex((d) => d.id === column.id);
        let newSorting = [];
        let sortAction;
        let nextDesc = hasManualValue ? desc : nextSortingOrder === "desc";
        if (old != null && old.length && column.getCanMultiSort() && multi) {
          if (existingSorting) {
            sortAction = "toggle";
          } else {
            sortAction = "add";
          }
        } else {
          if (old != null && old.length && existingIndex !== old.length - 1) {
            sortAction = "replace";
          } else if (existingSorting) {
            sortAction = "toggle";
          } else {
            sortAction = "replace";
          }
        }
        if (sortAction === "toggle") {
          if (!hasManualValue) {
            if (!nextSortingOrder) {
              sortAction = "remove";
            }
          }
        }
        if (sortAction === "add") {
          var _table$options$maxMul;
          newSorting = [...old, {
            id: column.id,
            desc: nextDesc
          }];
          newSorting.splice(0, newSorting.length - ((_table$options$maxMul = table.options.maxMultiSortColCount) != null ? _table$options$maxMul : Number.MAX_SAFE_INTEGER));
        } else if (sortAction === "toggle") {
          newSorting = old.map((d) => {
            if (d.id === column.id) {
              return {
                ...d,
                desc: nextDesc
              };
            }
            return d;
          });
        } else if (sortAction === "remove") {
          newSorting = old.filter((d) => d.id !== column.id);
        } else {
          newSorting = [{
            id: column.id,
            desc: nextDesc
          }];
        }
        return newSorting;
      });
    };
    column.getFirstSortDir = () => {
      var _ref, _column$columnDef$sor;
      const sortDescFirst = (_ref = (_column$columnDef$sor = column.columnDef.sortDescFirst) != null ? _column$columnDef$sor : table.options.sortDescFirst) != null ? _ref : column.getAutoSortDir() === "desc";
      return sortDescFirst ? "desc" : "asc";
    };
    column.getNextSortingOrder = (multi) => {
      var _table$options$enable, _table$options$enable2;
      const firstSortDirection = column.getFirstSortDir();
      const isSorted = column.getIsSorted();
      if (!isSorted) {
        return firstSortDirection;
      }
      if (isSorted !== firstSortDirection && ((_table$options$enable = table.options.enableSortingRemoval) != null ? _table$options$enable : true) && // If enableSortRemove, enable in general
      (multi ? (_table$options$enable2 = table.options.enableMultiRemove) != null ? _table$options$enable2 : true : true)) {
        return false;
      }
      return isSorted === "desc" ? "asc" : "desc";
    };
    column.getCanSort = () => {
      var _column$columnDef$ena, _table$options$enable3;
      return ((_column$columnDef$ena = column.columnDef.enableSorting) != null ? _column$columnDef$ena : true) && ((_table$options$enable3 = table.options.enableSorting) != null ? _table$options$enable3 : true) && !!column.accessorFn;
    };
    column.getCanMultiSort = () => {
      var _ref2, _column$columnDef$ena2;
      return (_ref2 = (_column$columnDef$ena2 = column.columnDef.enableMultiSort) != null ? _column$columnDef$ena2 : table.options.enableMultiSort) != null ? _ref2 : !!column.accessorFn;
    };
    column.getIsSorted = () => {
      var _table$getState$sorti;
      const columnSort = (_table$getState$sorti = table.getState().sorting) == null ? void 0 : _table$getState$sorti.find((d) => d.id === column.id);
      return !columnSort ? false : columnSort.desc ? "desc" : "asc";
    };
    column.getSortIndex = () => {
      var _table$getState$sorti2, _table$getState$sorti3;
      return (_table$getState$sorti2 = (_table$getState$sorti3 = table.getState().sorting) == null ? void 0 : _table$getState$sorti3.findIndex((d) => d.id === column.id)) != null ? _table$getState$sorti2 : -1;
    };
    column.clearSorting = () => {
      table.setSorting((old) => old != null && old.length ? old.filter((d) => d.id !== column.id) : []);
    };
    column.getToggleSortingHandler = () => {
      const canSort = column.getCanSort();
      return (e) => {
        if (!canSort)
          return;
        e.persist == null || e.persist();
        column.toggleSorting == null || column.toggleSorting(void 0, column.getCanMultiSort() ? table.options.isMultiSortEvent == null ? void 0 : table.options.isMultiSortEvent(e) : false);
      };
    };
  },
  createTable: (table) => {
    table.setSorting = (updater) => table.options.onSortingChange == null ? void 0 : table.options.onSortingChange(updater);
    table.resetSorting = (defaultState) => {
      var _table$initialState$s, _table$initialState;
      table.setSorting(defaultState ? [] : (_table$initialState$s = (_table$initialState = table.initialState) == null ? void 0 : _table$initialState.sorting) != null ? _table$initialState$s : []);
    };
    table.getPreSortedRowModel = () => table.getGroupedRowModel();
    table.getSortedRowModel = () => {
      if (!table._getSortedRowModel && table.options.getSortedRowModel) {
        table._getSortedRowModel = table.options.getSortedRowModel(table);
      }
      if (table.options.manualSorting || !table._getSortedRowModel) {
        return table.getPreSortedRowModel();
      }
      return table._getSortedRowModel();
    };
  }
};
var Visibility = {
  getInitialState: (state) => {
    return {
      columnVisibility: {},
      ...state
    };
  },
  getDefaultOptions: (table) => {
    return {
      onColumnVisibilityChange: makeStateUpdater("columnVisibility", table)
    };
  },
  createColumn: (column, table) => {
    column.toggleVisibility = (value) => {
      if (column.getCanHide()) {
        table.setColumnVisibility((old) => ({
          ...old,
          [column.id]: value != null ? value : !column.getIsVisible()
        }));
      }
    };
    column.getIsVisible = () => {
      var _table$getState$colum, _table$getState$colum2;
      return (_table$getState$colum = (_table$getState$colum2 = table.getState().columnVisibility) == null ? void 0 : _table$getState$colum2[column.id]) != null ? _table$getState$colum : true;
    };
    column.getCanHide = () => {
      var _column$columnDef$ena, _table$options$enable;
      return ((_column$columnDef$ena = column.columnDef.enableHiding) != null ? _column$columnDef$ena : true) && ((_table$options$enable = table.options.enableHiding) != null ? _table$options$enable : true);
    };
    column.getToggleVisibilityHandler = () => {
      return (e) => {
        column.toggleVisibility == null || column.toggleVisibility(e.target.checked);
      };
    };
  },
  createRow: (row, table) => {
    row._getAllVisibleCells = memo(() => [row.getAllCells(), table.getState().columnVisibility], (cells) => {
      return cells.filter((cell) => cell.column.getIsVisible());
    }, {
      key: false,
      debug: () => {
        var _table$options$debugA;
        return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugRows;
      }
    });
    row.getVisibleCells = memo(() => [row.getLeftVisibleCells(), row.getCenterVisibleCells(), row.getRightVisibleCells()], (left, center, right) => [...left, ...center, ...right], {
      key: "row.getVisibleCells",
      debug: () => {
        var _table$options$debugA2;
        return (_table$options$debugA2 = table.options.debugAll) != null ? _table$options$debugA2 : table.options.debugRows;
      }
    });
  },
  createTable: (table) => {
    const makeVisibleColumnsMethod = (key, getColumns) => {
      return memo(() => [getColumns(), getColumns().filter((d) => d.getIsVisible()).map((d) => d.id).join("_")], (columns2) => {
        return columns2.filter((d) => d.getIsVisible == null ? void 0 : d.getIsVisible());
      }, {
        key,
        debug: () => {
          var _table$options$debugA3;
          return (_table$options$debugA3 = table.options.debugAll) != null ? _table$options$debugA3 : table.options.debugColumns;
        }
      });
    };
    table.getVisibleFlatColumns = makeVisibleColumnsMethod("getVisibleFlatColumns", () => table.getAllFlatColumns());
    table.getVisibleLeafColumns = makeVisibleColumnsMethod("getVisibleLeafColumns", () => table.getAllLeafColumns());
    table.getLeftVisibleLeafColumns = makeVisibleColumnsMethod("getLeftVisibleLeafColumns", () => table.getLeftLeafColumns());
    table.getRightVisibleLeafColumns = makeVisibleColumnsMethod("getRightVisibleLeafColumns", () => table.getRightLeafColumns());
    table.getCenterVisibleLeafColumns = makeVisibleColumnsMethod("getCenterVisibleLeafColumns", () => table.getCenterLeafColumns());
    table.setColumnVisibility = (updater) => table.options.onColumnVisibilityChange == null ? void 0 : table.options.onColumnVisibilityChange(updater);
    table.resetColumnVisibility = (defaultState) => {
      var _table$initialState$c;
      table.setColumnVisibility(defaultState ? {} : (_table$initialState$c = table.initialState.columnVisibility) != null ? _table$initialState$c : {});
    };
    table.toggleAllColumnsVisible = (value) => {
      var _value;
      value = (_value = value) != null ? _value : !table.getIsAllColumnsVisible();
      table.setColumnVisibility(table.getAllLeafColumns().reduce((obj, column) => ({
        ...obj,
        [column.id]: !value ? !(column.getCanHide != null && column.getCanHide()) : value
      }), {}));
    };
    table.getIsAllColumnsVisible = () => !table.getAllLeafColumns().some((column) => !(column.getIsVisible != null && column.getIsVisible()));
    table.getIsSomeColumnsVisible = () => table.getAllLeafColumns().some((column) => column.getIsVisible == null ? void 0 : column.getIsVisible());
    table.getToggleAllColumnsVisibilityHandler = () => {
      return (e) => {
        var _target;
        table.toggleAllColumnsVisible((_target = e.target) == null ? void 0 : _target.checked);
      };
    };
  }
};
var features = [Headers, Visibility, Ordering, Pinning, Filters, Sorting, Grouping, Expanding, Pagination, RowSelection, ColumnSizing];
function createTable(options) {
  var _options$initialState;
  if (options.debugAll || options.debugTable) {
    console.info("Creating Table Instance...");
  }
  let table = {
    _features: features
  };
  const defaultOptions = table._features.reduce((obj, feature) => {
    return Object.assign(obj, feature.getDefaultOptions == null ? void 0 : feature.getDefaultOptions(table));
  }, {});
  const mergeOptions = (options2) => {
    if (table.options.mergeOptions) {
      return table.options.mergeOptions(defaultOptions, options2);
    }
    return {
      ...defaultOptions,
      ...options2
    };
  };
  const coreInitialState = {};
  let initialState = {
    ...coreInitialState,
    ...(_options$initialState = options.initialState) != null ? _options$initialState : {}
  };
  table._features.forEach((feature) => {
    var _feature$getInitialSt;
    initialState = (_feature$getInitialSt = feature.getInitialState == null ? void 0 : feature.getInitialState(initialState)) != null ? _feature$getInitialSt : initialState;
  });
  const queued = [];
  let queuedTimeout = false;
  const coreInstance = {
    _features: features,
    options: {
      ...defaultOptions,
      ...options
    },
    initialState,
    _queue: (cb) => {
      queued.push(cb);
      if (!queuedTimeout) {
        queuedTimeout = true;
        Promise.resolve().then(() => {
          while (queued.length) {
            queued.shift()();
          }
          queuedTimeout = false;
        }).catch((error) => setTimeout(() => {
          throw error;
        }));
      }
    },
    reset: () => {
      table.setState(table.initialState);
    },
    setOptions: (updater) => {
      const newOptions = functionalUpdate(updater, table.options);
      table.options = mergeOptions(newOptions);
    },
    getState: () => {
      return table.options.state;
    },
    setState: (updater) => {
      table.options.onStateChange == null || table.options.onStateChange(updater);
    },
    _getRowId: (row, index, parent) => {
      var _table$options$getRow;
      return (_table$options$getRow = table.options.getRowId == null ? void 0 : table.options.getRowId(row, index, parent)) != null ? _table$options$getRow : `${parent ? [parent.id, index].join(".") : index}`;
    },
    getCoreRowModel: () => {
      if (!table._getCoreRowModel) {
        table._getCoreRowModel = table.options.getCoreRowModel(table);
      }
      return table._getCoreRowModel();
    },
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => {
      return table.getPaginationRowModel();
    },
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (id, searchAll) => {
      let row = (searchAll ? table.getPrePaginationRowModel() : table.getRowModel()).rowsById[id];
      if (!row) {
        row = table.getCoreRowModel().rowsById[id];
        if (!row) {
          if (true) {
            throw new Error(`getRow could not find row with ID: ${id}`);
          }
          throw new Error();
        }
      }
      return row;
    },
    _getDefaultColumnDef: memo(() => [table.options.defaultColumn], (defaultColumn) => {
      var _defaultColumn;
      defaultColumn = (_defaultColumn = defaultColumn) != null ? _defaultColumn : {};
      return {
        header: (props) => {
          const resolvedColumnDef = props.header.column.columnDef;
          if (resolvedColumnDef.accessorKey) {
            return resolvedColumnDef.accessorKey;
          }
          if (resolvedColumnDef.accessorFn) {
            return resolvedColumnDef.id;
          }
          return null;
        },
        // footer: props => props.header.column.id,
        cell: (props) => {
          var _props$renderValue$to, _props$renderValue;
          return (_props$renderValue$to = (_props$renderValue = props.renderValue()) == null || _props$renderValue.toString == null ? void 0 : _props$renderValue.toString()) != null ? _props$renderValue$to : null;
        },
        ...table._features.reduce((obj, feature) => {
          return Object.assign(obj, feature.getDefaultColumnDef == null ? void 0 : feature.getDefaultColumnDef());
        }, {}),
        ...defaultColumn
      };
    }, {
      debug: () => {
        var _table$options$debugA;
        return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugColumns;
      },
      key: "getDefaultColumnDef"
    }),
    _getColumnDefs: () => table.options.columns,
    getAllColumns: memo(() => [table._getColumnDefs()], (columnDefs) => {
      const recurseColumns = function(columnDefs2, parent, depth) {
        if (depth === void 0) {
          depth = 0;
        }
        return columnDefs2.map((columnDef) => {
          const column = createColumn(table, columnDef, depth, parent);
          const groupingColumnDef = columnDef;
          column.columns = groupingColumnDef.columns ? recurseColumns(groupingColumnDef.columns, column, depth + 1) : [];
          return column;
        });
      };
      return recurseColumns(columnDefs);
    }, {
      key: "getAllColumns",
      debug: () => {
        var _table$options$debugA2;
        return (_table$options$debugA2 = table.options.debugAll) != null ? _table$options$debugA2 : table.options.debugColumns;
      }
    }),
    getAllFlatColumns: memo(() => [table.getAllColumns()], (allColumns) => {
      return allColumns.flatMap((column) => {
        return column.getFlatColumns();
      });
    }, {
      key: "getAllFlatColumns",
      debug: () => {
        var _table$options$debugA3;
        return (_table$options$debugA3 = table.options.debugAll) != null ? _table$options$debugA3 : table.options.debugColumns;
      }
    }),
    _getAllFlatColumnsById: memo(() => [table.getAllFlatColumns()], (flatColumns) => {
      return flatColumns.reduce((acc, column) => {
        acc[column.id] = column;
        return acc;
      }, {});
    }, {
      key: "getAllFlatColumnsById",
      debug: () => {
        var _table$options$debugA4;
        return (_table$options$debugA4 = table.options.debugAll) != null ? _table$options$debugA4 : table.options.debugColumns;
      }
    }),
    getAllLeafColumns: memo(() => [table.getAllColumns(), table._getOrderColumnsFn()], (allColumns, orderColumns2) => {
      let leafColumns = allColumns.flatMap((column) => column.getLeafColumns());
      return orderColumns2(leafColumns);
    }, {
      key: "getAllLeafColumns",
      debug: () => {
        var _table$options$debugA5;
        return (_table$options$debugA5 = table.options.debugAll) != null ? _table$options$debugA5 : table.options.debugColumns;
      }
    }),
    getColumn: (columnId) => {
      const column = table._getAllFlatColumnsById()[columnId];
      if (!column) {
        console.error(`[Table] Column with id '${columnId}' does not exist.`);
      }
      return column;
    }
  };
  Object.assign(table, coreInstance);
  for (let index = 0; index < table._features.length; index++) {
    const feature = table._features[index];
    feature == null || feature.createTable == null || feature.createTable(table);
  }
  return table;
}
function createCell(table, row, column, columnId) {
  const getRenderValue = () => {
    var _cell$getValue;
    return (_cell$getValue = cell.getValue()) != null ? _cell$getValue : table.options.renderFallbackValue;
  };
  const cell = {
    id: `${row.id}_${column.id}`,
    row,
    column,
    getValue: () => row.getValue(columnId),
    renderValue: getRenderValue,
    getContext: memo(() => [table, column, row, cell], (table2, column2, row2, cell2) => ({
      table: table2,
      column: column2,
      row: row2,
      cell: cell2,
      getValue: cell2.getValue,
      renderValue: cell2.renderValue
    }), {
      key: "cell.getContext",
      debug: () => table.options.debugAll
    })
  };
  table._features.forEach((feature) => {
    feature.createCell == null || feature.createCell(cell, column, row, table);
  }, {});
  return cell;
}
var createRow = (table, id, original, rowIndex, depth, subRows, parentId) => {
  let row = {
    id,
    index: rowIndex,
    original,
    depth,
    parentId,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: (columnId) => {
      if (row._valuesCache.hasOwnProperty(columnId)) {
        return row._valuesCache[columnId];
      }
      const column = table.getColumn(columnId);
      if (!(column != null && column.accessorFn)) {
        return void 0;
      }
      row._valuesCache[columnId] = column.accessorFn(row.original, rowIndex);
      return row._valuesCache[columnId];
    },
    getUniqueValues: (columnId) => {
      if (row._uniqueValuesCache.hasOwnProperty(columnId)) {
        return row._uniqueValuesCache[columnId];
      }
      const column = table.getColumn(columnId);
      if (!(column != null && column.accessorFn)) {
        return void 0;
      }
      if (!column.columnDef.getUniqueValues) {
        row._uniqueValuesCache[columnId] = [row.getValue(columnId)];
        return row._uniqueValuesCache[columnId];
      }
      row._uniqueValuesCache[columnId] = column.columnDef.getUniqueValues(row.original, rowIndex);
      return row._uniqueValuesCache[columnId];
    },
    renderValue: (columnId) => {
      var _row$getValue;
      return (_row$getValue = row.getValue(columnId)) != null ? _row$getValue : table.options.renderFallbackValue;
    },
    subRows: subRows != null ? subRows : [],
    getLeafRows: () => flattenBy(row.subRows, (d) => d.subRows),
    getParentRow: () => row.parentId ? table.getRow(row.parentId, true) : void 0,
    getParentRows: () => {
      let parentRows = [];
      let currentRow = row;
      while (true) {
        const parentRow = currentRow.getParentRow();
        if (!parentRow)
          break;
        parentRows.push(parentRow);
        currentRow = parentRow;
      }
      return parentRows.reverse();
    },
    getAllCells: memo(() => [table.getAllLeafColumns()], (leafColumns) => {
      return leafColumns.map((column) => {
        return createCell(table, row, column, column.id);
      });
    }, {
      key: "row.getAllCells",
      debug: () => {
        var _table$options$debugA;
        return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugRows;
      }
    }),
    _getAllCellsByColumnId: memo(() => [row.getAllCells()], (allCells) => {
      return allCells.reduce((acc, cell) => {
        acc[cell.column.id] = cell;
        return acc;
      }, {});
    }, {
      key: false,
      debug: () => {
        var _table$options$debugA2;
        return (_table$options$debugA2 = table.options.debugAll) != null ? _table$options$debugA2 : table.options.debugRows;
      }
    })
  };
  for (let i = 0; i < table._features.length; i++) {
    const feature = table._features[i];
    feature == null || feature.createRow == null || feature.createRow(row, table);
  }
  return row;
};
function getCoreRowModel() {
  return (table) => memo(() => [table.options.data], (data) => {
    const rowModel = {
      rows: [],
      flatRows: [],
      rowsById: {}
    };
    const accessRows = function(originalRows, depth, parentRow) {
      if (depth === void 0) {
        depth = 0;
      }
      const rows = [];
      for (let i = 0; i < originalRows.length; i++) {
        const row = createRow(table, table._getRowId(originalRows[i], i, parentRow), originalRows[i], i, depth, void 0, parentRow == null ? void 0 : parentRow.id);
        rowModel.flatRows.push(row);
        rowModel.rowsById[row.id] = row;
        rows.push(row);
        if (table.options.getSubRows) {
          var _row$originalSubRows;
          row.originalSubRows = table.options.getSubRows(originalRows[i], i);
          if ((_row$originalSubRows = row.originalSubRows) != null && _row$originalSubRows.length) {
            row.subRows = accessRows(row.originalSubRows, depth + 1, row);
          }
        }
      }
      return rows;
    };
    rowModel.rows = accessRows(data);
    return rowModel;
  }, {
    key: "getRowModel",
    debug: () => {
      var _table$options$debugA;
      return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
    },
    onChange: () => {
      table._autoResetPageIndex();
    }
  });
}
function filterRows(rows, filterRowImpl, table) {
  if (table.options.filterFromLeafRows) {
    return filterRowModelFromLeafs(rows, filterRowImpl, table);
  }
  return filterRowModelFromRoot(rows, filterRowImpl, table);
}
function filterRowModelFromLeafs(rowsToFilter, filterRow, table) {
  var _table$options$maxLea;
  const newFilteredFlatRows = [];
  const newFilteredRowsById = {};
  const maxDepth = (_table$options$maxLea = table.options.maxLeafRowFilterDepth) != null ? _table$options$maxLea : 100;
  const recurseFilterRows = function(rowsToFilter2, depth) {
    if (depth === void 0) {
      depth = 0;
    }
    const rows = [];
    for (let i = 0; i < rowsToFilter2.length; i++) {
      var _row$subRows;
      let row = rowsToFilter2[i];
      const newRow = createRow(table, row.id, row.original, row.index, row.depth, void 0, row.parentId);
      newRow.columnFilters = row.columnFilters;
      if ((_row$subRows = row.subRows) != null && _row$subRows.length && depth < maxDepth) {
        newRow.subRows = recurseFilterRows(row.subRows, depth + 1);
        row = newRow;
        if (filterRow(row) && !newRow.subRows.length) {
          rows.push(row);
          newFilteredRowsById[row.id] = row;
          newFilteredFlatRows.push(row);
          continue;
        }
        if (filterRow(row) || newRow.subRows.length) {
          rows.push(row);
          newFilteredRowsById[row.id] = row;
          newFilteredFlatRows.push(row);
          continue;
        }
      } else {
        row = newRow;
        if (filterRow(row)) {
          rows.push(row);
          newFilteredRowsById[row.id] = row;
          newFilteredFlatRows.push(row);
        }
      }
    }
    return rows;
  };
  return {
    rows: recurseFilterRows(rowsToFilter),
    flatRows: newFilteredFlatRows,
    rowsById: newFilteredRowsById
  };
}
function filterRowModelFromRoot(rowsToFilter, filterRow, table) {
  var _table$options$maxLea2;
  const newFilteredFlatRows = [];
  const newFilteredRowsById = {};
  const maxDepth = (_table$options$maxLea2 = table.options.maxLeafRowFilterDepth) != null ? _table$options$maxLea2 : 100;
  const recurseFilterRows = function(rowsToFilter2, depth) {
    if (depth === void 0) {
      depth = 0;
    }
    const rows = [];
    for (let i = 0; i < rowsToFilter2.length; i++) {
      let row = rowsToFilter2[i];
      const pass = filterRow(row);
      if (pass) {
        var _row$subRows2;
        if ((_row$subRows2 = row.subRows) != null && _row$subRows2.length && depth < maxDepth) {
          const newRow = createRow(table, row.id, row.original, row.index, row.depth, void 0, row.parentId);
          newRow.subRows = recurseFilterRows(row.subRows, depth + 1);
          row = newRow;
        }
        rows.push(row);
        newFilteredFlatRows.push(row);
        newFilteredRowsById[row.id] = row;
      }
    }
    return rows;
  };
  return {
    rows: recurseFilterRows(rowsToFilter),
    flatRows: newFilteredFlatRows,
    rowsById: newFilteredRowsById
  };
}
function getFilteredRowModel() {
  return (table) => memo(() => [table.getPreFilteredRowModel(), table.getState().columnFilters, table.getState().globalFilter], (rowModel, columnFilters, globalFilter) => {
    if (!rowModel.rows.length || !(columnFilters != null && columnFilters.length) && !globalFilter) {
      for (let i = 0; i < rowModel.flatRows.length; i++) {
        rowModel.flatRows[i].columnFilters = {};
        rowModel.flatRows[i].columnFiltersMeta = {};
      }
      return rowModel;
    }
    const resolvedColumnFilters = [];
    const resolvedGlobalFilters = [];
    (columnFilters != null ? columnFilters : []).forEach((d) => {
      var _filterFn$resolveFilt;
      const column = table.getColumn(d.id);
      if (!column) {
        return;
      }
      const filterFn = column.getFilterFn();
      if (!filterFn) {
        if (true) {
          console.warn(`Could not find a valid 'column.filterFn' for column with the ID: ${column.id}.`);
        }
        return;
      }
      resolvedColumnFilters.push({
        id: d.id,
        filterFn,
        resolvedValue: (_filterFn$resolveFilt = filterFn.resolveFilterValue == null ? void 0 : filterFn.resolveFilterValue(d.value)) != null ? _filterFn$resolveFilt : d.value
      });
    });
    const filterableIds = columnFilters.map((d) => d.id);
    const globalFilterFn = table.getGlobalFilterFn();
    const globallyFilterableColumns = table.getAllLeafColumns().filter((column) => column.getCanGlobalFilter());
    if (globalFilter && globalFilterFn && globallyFilterableColumns.length) {
      filterableIds.push("__global__");
      globallyFilterableColumns.forEach((column) => {
        var _globalFilterFn$resol;
        resolvedGlobalFilters.push({
          id: column.id,
          filterFn: globalFilterFn,
          resolvedValue: (_globalFilterFn$resol = globalFilterFn.resolveFilterValue == null ? void 0 : globalFilterFn.resolveFilterValue(globalFilter)) != null ? _globalFilterFn$resol : globalFilter
        });
      });
    }
    let currentColumnFilter;
    let currentGlobalFilter;
    for (let j = 0; j < rowModel.flatRows.length; j++) {
      const row = rowModel.flatRows[j];
      row.columnFilters = {};
      if (resolvedColumnFilters.length) {
        for (let i = 0; i < resolvedColumnFilters.length; i++) {
          currentColumnFilter = resolvedColumnFilters[i];
          const id = currentColumnFilter.id;
          row.columnFilters[id] = currentColumnFilter.filterFn(row, id, currentColumnFilter.resolvedValue, (filterMeta) => {
            row.columnFiltersMeta[id] = filterMeta;
          });
        }
      }
      if (resolvedGlobalFilters.length) {
        for (let i = 0; i < resolvedGlobalFilters.length; i++) {
          currentGlobalFilter = resolvedGlobalFilters[i];
          const id = currentGlobalFilter.id;
          if (currentGlobalFilter.filterFn(row, id, currentGlobalFilter.resolvedValue, (filterMeta) => {
            row.columnFiltersMeta[id] = filterMeta;
          })) {
            row.columnFilters.__global__ = true;
            break;
          }
        }
        if (row.columnFilters.__global__ !== true) {
          row.columnFilters.__global__ = false;
        }
      }
    }
    const filterRowsImpl = (row) => {
      for (let i = 0; i < filterableIds.length; i++) {
        if (row.columnFilters[filterableIds[i]] === false) {
          return false;
        }
      }
      return true;
    };
    return filterRows(rowModel.rows, filterRowsImpl, table);
  }, {
    key: "getFilteredRowModel",
    debug: () => {
      var _table$options$debugA;
      return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
    },
    onChange: () => {
      table._autoResetPageIndex();
    }
  });
}
function getFacetedRowModel() {
  return (table, columnId) => memo(() => [table.getPreFilteredRowModel(), table.getState().columnFilters, table.getState().globalFilter, table.getFilteredRowModel()], (preRowModel, columnFilters, globalFilter) => {
    if (!preRowModel.rows.length || !(columnFilters != null && columnFilters.length) && !globalFilter) {
      return preRowModel;
    }
    const filterableIds = [...columnFilters.map((d) => d.id).filter((d) => d !== columnId), globalFilter ? "__global__" : void 0].filter(Boolean);
    const filterRowsImpl = (row) => {
      for (let i = 0; i < filterableIds.length; i++) {
        if (row.columnFilters[filterableIds[i]] === false) {
          return false;
        }
      }
      return true;
    };
    return filterRows(preRowModel.rows, filterRowsImpl, table);
  }, {
    key: "getFacetedRowModel_" + columnId,
    debug: () => {
      var _table$options$debugA;
      return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
    },
    onChange: () => {
    }
  });
}
function getFacetedUniqueValues() {
  return (table, columnId) => memo(() => {
    var _table$getColumn;
    return [(_table$getColumn = table.getColumn(columnId)) == null ? void 0 : _table$getColumn.getFacetedRowModel()];
  }, (facetedRowModel) => {
    if (!facetedRowModel)
      return /* @__PURE__ */ new Map();
    let facetedUniqueValues = /* @__PURE__ */ new Map();
    for (let i = 0; i < facetedRowModel.flatRows.length; i++) {
      const values = facetedRowModel.flatRows[i].getUniqueValues(columnId);
      for (let j = 0; j < values.length; j++) {
        const value = values[j];
        if (facetedUniqueValues.has(value)) {
          var _facetedUniqueValues$;
          facetedUniqueValues.set(value, ((_facetedUniqueValues$ = facetedUniqueValues.get(value)) != null ? _facetedUniqueValues$ : 0) + 1);
        } else {
          facetedUniqueValues.set(value, 1);
        }
      }
    }
    return facetedUniqueValues;
  }, {
    key: "getFacetedUniqueValues_" + columnId,
    debug: () => {
      var _table$options$debugA;
      return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
    },
    onChange: () => {
    }
  });
}
function getSortedRowModel() {
  return (table) => memo(() => [table.getState().sorting, table.getPreSortedRowModel()], (sorting, rowModel) => {
    if (!rowModel.rows.length || !(sorting != null && sorting.length)) {
      return rowModel;
    }
    const sortingState = table.getState().sorting;
    const sortedFlatRows = [];
    const availableSorting = sortingState.filter((sort) => {
      var _table$getColumn;
      return (_table$getColumn = table.getColumn(sort.id)) == null ? void 0 : _table$getColumn.getCanSort();
    });
    const columnInfoById = {};
    availableSorting.forEach((sortEntry) => {
      const column = table.getColumn(sortEntry.id);
      if (!column)
        return;
      columnInfoById[sortEntry.id] = {
        sortUndefined: column.columnDef.sortUndefined,
        invertSorting: column.columnDef.invertSorting,
        sortingFn: column.getSortingFn()
      };
    });
    const sortData = (rows) => {
      const sortedData = rows.map((row) => ({
        ...row
      }));
      sortedData.sort((rowA, rowB) => {
        for (let i = 0; i < availableSorting.length; i += 1) {
          var _sortEntry$desc;
          const sortEntry = availableSorting[i];
          const columnInfo = columnInfoById[sortEntry.id];
          const isDesc = (_sortEntry$desc = sortEntry == null ? void 0 : sortEntry.desc) != null ? _sortEntry$desc : false;
          let sortInt = 0;
          if (columnInfo.sortUndefined) {
            const aValue = rowA.getValue(sortEntry.id);
            const bValue = rowB.getValue(sortEntry.id);
            const aUndefined = aValue === void 0;
            const bUndefined = bValue === void 0;
            if (aUndefined || bUndefined) {
              sortInt = aUndefined && bUndefined ? 0 : aUndefined ? columnInfo.sortUndefined : -columnInfo.sortUndefined;
            }
          }
          if (sortInt === 0) {
            sortInt = columnInfo.sortingFn(rowA, rowB, sortEntry.id);
          }
          if (sortInt !== 0) {
            if (isDesc) {
              sortInt *= -1;
            }
            if (columnInfo.invertSorting) {
              sortInt *= -1;
            }
            return sortInt;
          }
        }
        return rowA.index - rowB.index;
      });
      sortedData.forEach((row) => {
        var _row$subRows;
        sortedFlatRows.push(row);
        if ((_row$subRows = row.subRows) != null && _row$subRows.length) {
          row.subRows = sortData(row.subRows);
        }
      });
      return sortedData;
    };
    return {
      rows: sortData(rowModel.rows),
      flatRows: sortedFlatRows,
      rowsById: rowModel.rowsById
    };
  }, {
    key: "getSortedRowModel",
    debug: () => {
      var _table$options$debugA;
      return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
    },
    onChange: () => {
      table._autoResetPageIndex();
    }
  });
}
function expandRows(rowModel) {
  const expandedRows = [];
  const handleRow = (row) => {
    var _row$subRows;
    expandedRows.push(row);
    if ((_row$subRows = row.subRows) != null && _row$subRows.length && row.getIsExpanded()) {
      row.subRows.forEach(handleRow);
    }
  };
  rowModel.rows.forEach(handleRow);
  return {
    rows: expandedRows,
    flatRows: rowModel.flatRows,
    rowsById: rowModel.rowsById
  };
}
function getPaginationRowModel(opts) {
  return (table) => memo(() => [table.getState().pagination, table.getPrePaginationRowModel(), table.options.paginateExpandedRows ? void 0 : table.getState().expanded], (pagination, rowModel) => {
    if (!rowModel.rows.length) {
      return rowModel;
    }
    const {
      pageSize,
      pageIndex
    } = pagination;
    let {
      rows,
      flatRows,
      rowsById
    } = rowModel;
    const pageStart = pageSize * pageIndex;
    const pageEnd = pageStart + pageSize;
    rows = rows.slice(pageStart, pageEnd);
    let paginatedRowModel;
    if (!table.options.paginateExpandedRows) {
      paginatedRowModel = expandRows({
        rows,
        flatRows,
        rowsById
      });
    } else {
      paginatedRowModel = {
        rows,
        flatRows,
        rowsById
      };
    }
    paginatedRowModel.flatRows = [];
    const handleRow = (row) => {
      paginatedRowModel.flatRows.push(row);
      if (row.subRows.length) {
        row.subRows.forEach(handleRow);
      }
    };
    paginatedRowModel.rows.forEach(handleRow);
    return paginatedRowModel;
  }, {
    key: "getPaginationRowModel",
    debug: () => {
      var _table$options$debugA;
      return (_table$options$debugA = table.options.debugAll) != null ? _table$options$debugA : table.options.debugTable;
    }
  });
}

// node_modules/@tanstack/react-table/build/lib/index.mjs
function flexRender(Comp, props) {
  return !Comp ? null : isReactComponent(Comp) ? /* @__PURE__ */ React.createElement(Comp, props) : Comp;
}
function isReactComponent(component) {
  return isClassComponent(component) || typeof component === "function" || isExoticComponent(component);
}
function isClassComponent(component) {
  return typeof component === "function" && (() => {
    const proto = Object.getPrototypeOf(component);
    return proto.prototype && proto.prototype.isReactComponent;
  })();
}
function isExoticComponent(component) {
  return typeof component === "object" && typeof component.$$typeof === "symbol" && ["react.memo", "react.forward_ref"].includes(component.$$typeof.description);
}
function useReactTable(options) {
  const resolvedOptions = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...options
  };
  const [tableRef] = React.useState(() => ({
    current: createTable(resolvedOptions)
  }));
  const [state, setState] = React.useState(() => tableRef.current.initialState);
  tableRef.current.setOptions((prev) => ({
    ...prev,
    ...options,
    state: {
      ...state,
      ...options.state
    },
    // Similarly, we'll maintain both our internal state and any user-provided
    // state.
    onStateChange: (updater) => {
      setState(updater);
      options.onStateChange == null || options.onStateChange(updater);
    }
  }));
  return tableRef.current;
}

// app/routes/_layout+/dashboard+/car.tsx
var import_react18 = __toESM(require_react(), 1);

// app/shared/ui/Table/Table.tsx
var React2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/shared/ui/Table/Table.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/shared/ui/Table/Table.tsx"
  );
  import.meta.hot.lastModified = "1706588338083.9937";
}
var Table = React2.forwardRef(_c = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { ref, className: cn("w-full caption-bottom text-sm", className), ...props }, void 0, false, {
  fileName: "app/shared/ui/Table/Table.tsx",
  lineNumber: 27,
  columnNumber: 3
}, this) }, void 0, false, {
  fileName: "app/shared/ui/Table/Table.tsx",
  lineNumber: 26,
  columnNumber: 12
}, this));
_c2 = Table;
Table.displayName = "Table";
var TableHeader = React2.forwardRef(_c3 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }, void 0, false, {
  fileName: "app/shared/ui/Table/Table.tsx",
  lineNumber: 34,
  columnNumber: 12
}, this));
_c4 = TableHeader;
TableHeader.displayName = "TableHeader";
var TableBody = React2.forwardRef(_c5 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { ref, className: cn("[&_tr:last-child]:border-0", className), ...props }, void 0, false, {
  fileName: "app/shared/ui/Table/Table.tsx",
  lineNumber: 40,
  columnNumber: 12
}, this));
_c6 = TableBody;
TableBody.displayName = "TableBody";
var TableFooter = React2.forwardRef(_c7 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tfoot", { ref, className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className), ...props }, void 0, false, {
  fileName: "app/shared/ui/Table/Table.tsx",
  lineNumber: 46,
  columnNumber: 12
}, this));
_c8 = TableFooter;
TableFooter.displayName = "TableFooter";
var TableRow = React2.forwardRef(_c9 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { ref, className: cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className), ...props }, void 0, false, {
  fileName: "app/shared/ui/Table/Table.tsx",
  lineNumber: 52,
  columnNumber: 12
}, this));
_c10 = TableRow;
TableRow.displayName = "TableRow";
var TableHead = React2.forwardRef(_c11 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { ref, className: cn("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className), ...props }, void 0, false, {
  fileName: "app/shared/ui/Table/Table.tsx",
  lineNumber: 58,
  columnNumber: 12
}, this));
_c12 = TableHead;
TableHead.displayName = "TableHead";
var TableCell = React2.forwardRef(_c13 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { ref, className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className), ...props }, void 0, false, {
  fileName: "app/shared/ui/Table/Table.tsx",
  lineNumber: 64,
  columnNumber: 12
}, this));
_c14 = TableCell;
TableCell.displayName = "TableCell";
var TableCaption = React2.forwardRef(_c15 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("caption", { ref, className: cn("mt-4 text-sm text-muted-foreground", className), ...props }, void 0, false, {
  fileName: "app/shared/ui/Table/Table.tsx",
  lineNumber: 70,
  columnNumber: 12
}, this));
_c16 = TableCaption;
TableCaption.displayName = "TableCaption";
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
$RefreshReg$(_c, "Table$React.forwardRef");
$RefreshReg$(_c2, "Table");
$RefreshReg$(_c3, "TableHeader$React.forwardRef");
$RefreshReg$(_c4, "TableHeader");
$RefreshReg$(_c5, "TableBody$React.forwardRef");
$RefreshReg$(_c6, "TableBody");
$RefreshReg$(_c7, "TableFooter$React.forwardRef");
$RefreshReg$(_c8, "TableFooter");
$RefreshReg$(_c9, "TableRow$React.forwardRef");
$RefreshReg$(_c10, "TableRow");
$RefreshReg$(_c11, "TableHead$React.forwardRef");
$RefreshReg$(_c12, "TableHead");
$RefreshReg$(_c13, "TableCell$React.forwardRef");
$RefreshReg$(_c14, "TableCell");
$RefreshReg$(_c15, "TableCaption$React.forwardRef");
$RefreshReg$(_c16, "TableCaption");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// node_modules/cmdk/dist/chunk-XJATAMEX.mjs
var U = 1;
var Y = 0.9;
var a = 0.8;
var H = 0.17;
var p = 0.1;
var u = 0.999;
var J = 0.9999;
var k = 0.99;
var m = /[\\\/_+.#"@\[\(\{&]/;
var B = /[\\\/_+.#"@\[\(\{&]/g;
var K = /[\s-]/;
var X = /[\s-]/g;
function G(c, f, P, C, h, A2, O2) {
  if (A2 === f.length)
    return h === c.length ? U : k;
  var T = `${h},${A2}`;
  if (O2[T] !== void 0)
    return O2[T];
  for (var L2 = C.charAt(A2), E = P.indexOf(L2, h), S2 = 0, _2, N, R, M; E >= 0; )
    _2 = G(c, f, P, C, E + 1, A2 + 1, O2), _2 > S2 && (E === h ? _2 *= U : m.test(c.charAt(E - 1)) ? (_2 *= a, R = c.slice(h, E - 1).match(B), R && h > 0 && (_2 *= Math.pow(u, R.length))) : K.test(c.charAt(E - 1)) ? (_2 *= Y, M = c.slice(h, E - 1).match(X), M && h > 0 && (_2 *= Math.pow(u, M.length))) : (_2 *= H, h > 0 && (_2 *= Math.pow(u, E - h))), c.charAt(E) !== f.charAt(A2) && (_2 *= J)), (_2 < p && P.charAt(E - 1) === C.charAt(A2 + 1) || C.charAt(A2 + 1) === C.charAt(A2) && P.charAt(E - 1) !== C.charAt(A2)) && (N = G(c, f, P, C, E + 1, A2 + 2, O2), N * p > _2 && (_2 = N * p)), _2 > S2 && (S2 = _2), E = P.indexOf(L2, E + 1);
  return O2[T] = S2, S2;
}
function D(c) {
  return c.toLowerCase().replace(X, " ");
}
function W(c, f) {
  return G(c, f, D(c), D(f), 0, 0, {});
}

// node_modules/cmdk/node_modules/@radix-ui/react-dialog/dist/index.module.js
var import_react14 = __toESM(require_react());

// node_modules/cmdk/node_modules/@radix-ui/primitive/dist/index.module.js
function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler === null || originalEventHandler === void 0 || originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented)
      return ourEventHandler === null || ourEventHandler === void 0 ? void 0 : ourEventHandler(event);
  };
}

// node_modules/cmdk/node_modules/@radix-ui/react-compose-refs/dist/index.module.js
var import_react = __toESM(require_react());
function $6ed0406888f73fc4$var$setRef(ref, value) {
  if (typeof ref === "function")
    ref(value);
  else if (ref !== null && ref !== void 0)
    ref.current = value;
}
function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs) {
  return (node) => refs.forEach(
    (ref) => $6ed0406888f73fc4$var$setRef(ref, node)
  );
}
function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs) {
  return (0, import_react.useCallback)($6ed0406888f73fc4$export$43e446d32b3d21af(...refs), refs);
}

// node_modules/cmdk/node_modules/@radix-ui/react-context/dist/index.module.js
var import_react2 = __toESM(require_react());
function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
  const Context = /* @__PURE__ */ (0, import_react2.createContext)(defaultContext);
  function Provider(props) {
    const { children, ...context } = props;
    const value = (0, import_react2.useMemo)(
      () => context,
      Object.values(context)
    );
    return /* @__PURE__ */ (0, import_react2.createElement)(Context.Provider, {
      value
    }, children);
  }
  function useContext2(consumerName) {
    const context = (0, import_react2.useContext)(Context);
    if (context)
      return context;
    if (defaultContext !== void 0)
      return defaultContext;
    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
  }
  Provider.displayName = rootComponentName + "Provider";
  return [
    Provider,
    useContext2
  ];
}
function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function $c512c27ab02ef895$export$fd42f52fd3ae11092(rootComponentName, defaultContext) {
    const BaseContext = /* @__PURE__ */ (0, import_react2.createContext)(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [
      ...defaultContexts,
      defaultContext
    ];
    function Provider(props) {
      const { scope, children, ...context } = props;
      const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext;
      const value = (0, import_react2.useMemo)(
        () => context,
        Object.values(context)
      );
      return /* @__PURE__ */ (0, import_react2.createElement)(Context.Provider, {
        value
      }, children);
    }
    function useContext2(consumerName, scope) {
      const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext;
      const context = (0, import_react2.useContext)(Context);
      if (context)
        return context;
      if (defaultContext !== void 0)
        return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider.displayName = rootComponentName + "Provider";
    return [
      Provider,
      useContext2
    ];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return /* @__PURE__ */ (0, import_react2.createContext)(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope === null || scope === void 0 ? void 0 : scope[scopeName]) || scopeContexts;
      return (0, import_react2.useMemo)(
        () => ({
          [`__scope${scopeName}`]: {
            ...scope,
            [scopeName]: contexts
          }
        }),
        [
          scope,
          contexts
        ]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [
    $c512c27ab02ef895$export$fd42f52fd3ae11092,
    $c512c27ab02ef895$var$composeContextScopes(createScope, ...createContextScopeDeps)
  ];
}
function $c512c27ab02ef895$var$composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1)
    return baseScope;
  const createScope1 = () => {
    const scopeHooks = scopes.map(
      (createScope) => ({
        useScope: createScope(),
        scopeName: createScope.scopeName
      })
    );
    return function useComposedScopes(overrideScopes) {
      const nextScopes1 = scopeHooks.reduce((nextScopes, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return {
          ...nextScopes,
          ...currentScope
        };
      }, {});
      return (0, import_react2.useMemo)(
        () => ({
          [`__scope${baseScope.scopeName}`]: nextScopes1
        }),
        [
          nextScopes1
        ]
      );
    };
  };
  createScope1.scopeName = baseScope.scopeName;
  return createScope1;
}

// node_modules/cmdk/node_modules/@radix-ui/react-id/dist/index.module.js
var $2AODx$react = __toESM(require_react());

// node_modules/cmdk/node_modules/@radix-ui/react-use-layout-effect/dist/index.module.js
var import_react3 = __toESM(require_react());
var $9f79659886946c16$export$e5c5a5f917a5871c = Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) ? import_react3.useLayoutEffect : () => {
};

// node_modules/cmdk/node_modules/@radix-ui/react-id/dist/index.module.js
var $1746a345f3d73bb7$var$useReactId = $2AODx$react["useId".toString()] || (() => void 0);
var $1746a345f3d73bb7$var$count = 0;
function $1746a345f3d73bb7$export$f680877a34711e37(deterministicId) {
  const [id, setId] = $2AODx$react.useState($1746a345f3d73bb7$var$useReactId());
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (!deterministicId)
      setId(
        (reactId) => reactId !== null && reactId !== void 0 ? reactId : String($1746a345f3d73bb7$var$count++)
      );
  }, [
    deterministicId
  ]);
  return deterministicId || (id ? `radix-${id}` : "");
}

// node_modules/cmdk/node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js
var import_react5 = __toESM(require_react());

// node_modules/cmdk/node_modules/@radix-ui/react-use-callback-ref/dist/index.module.js
var import_react4 = __toESM(require_react());
function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback) {
  const callbackRef = (0, import_react4.useRef)(callback);
  (0, import_react4.useEffect)(() => {
    callbackRef.current = callback;
  });
  return (0, import_react4.useMemo)(
    () => (...args) => {
      var _callbackRef$current;
      return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);
    },
    []
  );
}

// node_modules/cmdk/node_modules/@radix-ui/react-use-controllable-state/dist/index.module.js
function $71cd76cc60e0454e$export$6f32135080cb4c3({ prop, defaultProp, onChange = () => {
} }) {
  const [uncontrolledProp, setUncontrolledProp] = $71cd76cc60e0454e$var$useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value1 = isControlled ? prop : uncontrolledProp;
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  const setValue = (0, import_react5.useCallback)((nextValue) => {
    if (isControlled) {
      const setter = nextValue;
      const value = typeof nextValue === "function" ? setter(prop) : nextValue;
      if (value !== prop)
        handleChange(value);
    } else
      setUncontrolledProp(nextValue);
  }, [
    isControlled,
    prop,
    setUncontrolledProp,
    handleChange
  ]);
  return [
    value1,
    setValue
  ];
}
function $71cd76cc60e0454e$var$useUncontrolledState({ defaultProp, onChange }) {
  const uncontrolledState = (0, import_react5.useState)(defaultProp);
  const [value] = uncontrolledState;
  const prevValueRef = (0, import_react5.useRef)(value);
  const handleChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);
  (0, import_react5.useEffect)(() => {
    if (prevValueRef.current !== value) {
      handleChange(value);
      prevValueRef.current = value;
    }
  }, [
    value,
    prevValueRef,
    handleChange
  ]);
  return uncontrolledState;
}

// node_modules/cmdk/node_modules/@radix-ui/react-dismissable-layer/dist/index.module.js
var import_react9 = __toESM(require_react());

// node_modules/cmdk/node_modules/@radix-ui/react-primitive/dist/index.module.js
var import_react7 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// node_modules/cmdk/node_modules/@radix-ui/react-slot/dist/index.module.js
var import_react6 = __toESM(require_react());
var $5e63c961fc1ce211$export$8c6ed5c666ac1360 = /* @__PURE__ */ (0, import_react6.forwardRef)((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  const childrenArray = import_react6.Children.toArray(children);
  const slottable = childrenArray.find($5e63c961fc1ce211$var$isSlottable);
  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (import_react6.Children.count(newElement) > 1)
          return import_react6.Children.only(null);
        return /* @__PURE__ */ (0, import_react6.isValidElement)(newElement) ? newElement.props.children : null;
      } else
        return child;
    });
    return /* @__PURE__ */ (0, import_react6.createElement)($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
      ref: forwardedRef
    }), /* @__PURE__ */ (0, import_react6.isValidElement)(newElement) ? /* @__PURE__ */ (0, import_react6.cloneElement)(newElement, void 0, newChildren) : null);
  }
  return /* @__PURE__ */ (0, import_react6.createElement)($5e63c961fc1ce211$var$SlotClone, _extends({}, slotProps, {
    ref: forwardedRef
  }), children);
});
$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName = "Slot";
var $5e63c961fc1ce211$var$SlotClone = /* @__PURE__ */ (0, import_react6.forwardRef)((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  if (/* @__PURE__ */ (0, import_react6.isValidElement)(children))
    return /* @__PURE__ */ (0, import_react6.cloneElement)(children, {
      ...$5e63c961fc1ce211$var$mergeProps(slotProps, children.props),
      ref: $6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef, children.ref)
    });
  return import_react6.Children.count(children) > 1 ? import_react6.Children.only(null) : null;
});
$5e63c961fc1ce211$var$SlotClone.displayName = "SlotClone";
var $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children }) => {
  return /* @__PURE__ */ (0, import_react6.createElement)(import_react6.Fragment, null, children);
};
function $5e63c961fc1ce211$var$isSlottable(child) {
  return /* @__PURE__ */ (0, import_react6.isValidElement)(child) && child.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45;
}
function $5e63c961fc1ce211$var$mergeProps(slotProps, childProps) {
  const overrideProps = {
    ...childProps
  };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler)
      overrideProps[propName] = (...args) => {
        childPropValue === null || childPropValue === void 0 || childPropValue(...args);
        slotPropValue === null || slotPropValue === void 0 || slotPropValue(...args);
      };
    else if (propName === "style")
      overrideProps[propName] = {
        ...slotPropValue,
        ...childPropValue
      };
    else if (propName === "className")
      overrideProps[propName] = [
        slotPropValue,
        childPropValue
      ].filter(Boolean).join(" ");
  }
  return {
    ...slotProps,
    ...overrideProps
  };
}

// node_modules/cmdk/node_modules/@radix-ui/react-primitive/dist/index.module.js
var $8927f6f2acc4f386$var$NODES = [
  "a",
  "button",
  "div",
  "h2",
  "h3",
  "img",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
var $8927f6f2acc4f386$export$250ffa63cdc0d0342 = $8927f6f2acc4f386$var$NODES.reduce((primitive, node) => {
  const Node = /* @__PURE__ */ (0, import_react7.forwardRef)((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : node;
    (0, import_react7.useEffect)(() => {
      window[Symbol.for("radix-ui")] = true;
    }, []);
    return /* @__PURE__ */ (0, import_react7.createElement)(Comp, _extends({}, primitiveProps, {
      ref: forwardedRef
    }));
  });
  Node.displayName = `Primitive.${node}`;
  return {
    ...primitive,
    [node]: Node
  };
}, {});
function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event) {
  if (target)
    (0, import_react_dom.flushSync)(
      () => target.dispatchEvent(event)
    );
}

// node_modules/cmdk/node_modules/@radix-ui/react-use-escape-keydown/dist/index.module.js
var import_react8 = __toESM(require_react());
function $addc16e1bbe58fd0$export$3a72a57244d6e765(onEscapeKeyDownProp) {
  const onEscapeKeyDown = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onEscapeKeyDownProp);
  (0, import_react8.useEffect)(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape")
        onEscapeKeyDown(event);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [
    onEscapeKeyDown
  ]);
}

// node_modules/cmdk/node_modules/@radix-ui/react-dismissable-layer/dist/index.module.js
var $5cb92bef7577960e$var$CONTEXT_UPDATE = "dismissableLayer.update";
var $5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var $5cb92bef7577960e$var$FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var $5cb92bef7577960e$var$originalBodyPointerEvents;
var $5cb92bef7577960e$var$DismissableLayerContext = /* @__PURE__ */ (0, import_react9.createContext)({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var $5cb92bef7577960e$export$177fb62ff3ec1f22 = /* @__PURE__ */ (0, import_react9.forwardRef)((props, forwardedRef) => {
  const { disableOutsidePointerEvents = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
  const context = (0, import_react9.useContext)($5cb92bef7577960e$var$DismissableLayerContext);
  const [node1, setNode] = (0, import_react9.useState)(null);
  const [, force] = (0, import_react9.useState)({});
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setNode(node)
  );
  const layers = Array.from(context.layers);
  const [highestLayerWithOutsidePointerEventsDisabled] = [
    ...context.layersWithOutsidePointerEventsDisabled
  ].slice(-1);
  const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
  const index = node1 ? layers.indexOf(node1) : -1;
  const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
  const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
  const pointerDownOutside = $5cb92bef7577960e$var$usePointerDownOutside((event) => {
    const target = event.target;
    const isPointerDownOnBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (!isPointerEventsEnabled || isPointerDownOnBranch)
      return;
    onPointerDownOutside === null || onPointerDownOutside === void 0 || onPointerDownOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented)
      onDismiss === null || onDismiss === void 0 || onDismiss();
  });
  const focusOutside = $5cb92bef7577960e$var$useFocusOutside((event) => {
    const target = event.target;
    const isFocusInBranch = [
      ...context.branches
    ].some(
      (branch) => branch.contains(target)
    );
    if (isFocusInBranch)
      return;
    onFocusOutside === null || onFocusOutside === void 0 || onFocusOutside(event);
    onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
    if (!event.defaultPrevented)
      onDismiss === null || onDismiss === void 0 || onDismiss();
  });
  $addc16e1bbe58fd0$export$3a72a57244d6e765((event) => {
    const isHighestLayer = index === context.layers.size - 1;
    if (!isHighestLayer)
      return;
    onEscapeKeyDown === null || onEscapeKeyDown === void 0 || onEscapeKeyDown(event);
    if (!event.defaultPrevented && onDismiss) {
      event.preventDefault();
      onDismiss();
    }
  });
  (0, import_react9.useEffect)(() => {
    if (!node1)
      return;
    if (disableOutsidePointerEvents) {
      if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
        $5cb92bef7577960e$var$originalBodyPointerEvents = document.body.style.pointerEvents;
        document.body.style.pointerEvents = "none";
      }
      context.layersWithOutsidePointerEventsDisabled.add(node1);
    }
    context.layers.add(node1);
    $5cb92bef7577960e$var$dispatchUpdate();
    return () => {
      if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1)
        document.body.style.pointerEvents = $5cb92bef7577960e$var$originalBodyPointerEvents;
    };
  }, [
    node1,
    disableOutsidePointerEvents,
    context
  ]);
  (0, import_react9.useEffect)(() => {
    return () => {
      if (!node1)
        return;
      context.layers.delete(node1);
      context.layersWithOutsidePointerEventsDisabled.delete(node1);
      $5cb92bef7577960e$var$dispatchUpdate();
    };
  }, [
    node1,
    context
  ]);
  (0, import_react9.useEffect)(() => {
    const handleUpdate = () => force({});
    document.addEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
    return () => document.removeEventListener($5cb92bef7577960e$var$CONTEXT_UPDATE, handleUpdate);
  }, []);
  return /* @__PURE__ */ (0, import_react9.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d0342.div, _extends({}, layerProps, {
    ref: composedRefs,
    style: {
      pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
      ...props.style
    },
    onFocusCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusCapture, focusOutside.onFocusCapture),
    onBlurCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onBlurCapture, focusOutside.onBlurCapture),
    onPointerDownCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
  }));
});
function $5cb92bef7577960e$var$usePointerDownOutside(onPointerDownOutside) {
  const handlePointerDownOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onPointerDownOutside);
  const isPointerInsideReactTreeRef = (0, import_react9.useRef)(false);
  const handleClickRef = (0, import_react9.useRef)(() => {
  });
  (0, import_react9.useEffect)(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent = function() {
          $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
            discrete: true
          });
        };
        const eventDetail = {
          originalEvent: event
        };
        if (event.pointerType === "touch") {
          document.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent;
          document.addEventListener("click", handleClickRef.current, {
            once: true
          });
        } else
          handleAndDispatchPointerDownOutsideEvent();
      }
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      document.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("click", handleClickRef.current);
    };
  }, [
    handlePointerDownOutside
  ]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function $5cb92bef7577960e$var$useFocusOutside(onFocusOutside) {
  const handleFocusOutside = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onFocusOutside);
  const isFocusInsideReactTreeRef = (0, import_react9.useRef)(false);
  (0, import_react9.useEffect)(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = {
          originalEvent: event
        };
        $5cb92bef7577960e$var$handleAndDispatchCustomEvent($5cb92bef7577960e$var$FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    document.addEventListener("focusin", handleFocus);
    return () => document.removeEventListener("focusin", handleFocus);
  }, [
    handleFocusOutside
  ]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function $5cb92bef7577960e$var$dispatchUpdate() {
  const event = new CustomEvent($5cb92bef7577960e$var$CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, {
    bubbles: false,
    cancelable: true,
    detail
  });
  if (handler)
    target.addEventListener(name, handler, {
      once: true
    });
  if (discrete)
    $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event);
  else
    target.dispatchEvent(event);
}

// node_modules/cmdk/node_modules/@radix-ui/react-focus-scope/dist/index.module.js
var import_react10 = __toESM(require_react());
var $d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var $d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var $d3863c46a17e8a28$var$EVENT_OPTIONS = {
  bubbles: false,
  cancelable: true
};
var $d3863c46a17e8a28$export$20e40289641fbbb6 = /* @__PURE__ */ (0, import_react10.forwardRef)((props, forwardedRef) => {
  const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
  const [container1, setContainer] = (0, import_react10.useState)(null);
  const onMountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onMountAutoFocusProp);
  const onUnmountAutoFocus = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onUnmountAutoFocusProp);
  const lastFocusedElementRef = (0, import_react10.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setContainer(node)
  );
  const focusScope = (0, import_react10.useRef)({
    paused: false,
    pause() {
      this.paused = true;
    },
    resume() {
      this.paused = false;
    }
  }).current;
  (0, import_react10.useEffect)(() => {
    if (trapped) {
      let handleFocusIn = function(event) {
        if (focusScope.paused || !container1)
          return;
        const target = event.target;
        if (container1.contains(target))
          lastFocusedElementRef.current = target;
        else
          $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
            select: true
          });
      }, handleFocusOut = function(event) {
        if (focusScope.paused || !container1)
          return;
        if (!container1.contains(event.relatedTarget))
          $d3863c46a17e8a28$var$focus(lastFocusedElementRef.current, {
            select: true
          });
      };
      document.addEventListener("focusin", handleFocusIn);
      document.addEventListener("focusout", handleFocusOut);
      return () => {
        document.removeEventListener("focusin", handleFocusIn);
        document.removeEventListener("focusout", handleFocusOut);
      };
    }
  }, [
    trapped,
    container1,
    focusScope.paused
  ]);
  (0, import_react10.useEffect)(() => {
    if (container1) {
      $d3863c46a17e8a28$var$focusScopesStack.add(focusScope);
      const previouslyFocusedElement = document.activeElement;
      const hasFocusedCandidate = container1.contains(previouslyFocusedElement);
      if (!hasFocusedCandidate) {
        const mountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
        container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        container1.dispatchEvent(mountEvent);
        if (!mountEvent.defaultPrevented) {
          $d3863c46a17e8a28$var$focusFirst($d3863c46a17e8a28$var$removeLinks($d3863c46a17e8a28$var$getTabbableCandidates(container1)), {
            select: true
          });
          if (document.activeElement === previouslyFocusedElement)
            $d3863c46a17e8a28$var$focus(container1);
        }
      }
      return () => {
        container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        setTimeout(() => {
          const unmountEvent = new CustomEvent($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, $d3863c46a17e8a28$var$EVENT_OPTIONS);
          container1.addEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          container1.dispatchEvent(unmountEvent);
          if (!unmountEvent.defaultPrevented)
            $d3863c46a17e8a28$var$focus(previouslyFocusedElement !== null && previouslyFocusedElement !== void 0 ? previouslyFocusedElement : document.body, {
              select: true
            });
          container1.removeEventListener($d3863c46a17e8a28$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          $d3863c46a17e8a28$var$focusScopesStack.remove(focusScope);
        }, 0);
      };
    }
  }, [
    container1,
    onMountAutoFocus,
    onUnmountAutoFocus,
    focusScope
  ]);
  const handleKeyDown = (0, import_react10.useCallback)((event) => {
    if (!loop && !trapped)
      return;
    if (focusScope.paused)
      return;
    const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
    const focusedElement = document.activeElement;
    if (isTabKey && focusedElement) {
      const container = event.currentTarget;
      const [first, last] = $d3863c46a17e8a28$var$getTabbableEdges(container);
      const hasTabbableElementsInside = first && last;
      if (!hasTabbableElementsInside) {
        if (focusedElement === container)
          event.preventDefault();
      } else {
        if (!event.shiftKey && focusedElement === last) {
          event.preventDefault();
          if (loop)
            $d3863c46a17e8a28$var$focus(first, {
              select: true
            });
        } else if (event.shiftKey && focusedElement === first) {
          event.preventDefault();
          if (loop)
            $d3863c46a17e8a28$var$focus(last, {
              select: true
            });
        }
      }
    }
  }, [
    loop,
    trapped,
    focusScope.paused
  ]);
  return /* @__PURE__ */ (0, import_react10.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d0342.div, _extends({
    tabIndex: -1
  }, scopeProps, {
    ref: composedRefs,
    onKeyDown: handleKeyDown
  }));
});
function $d3863c46a17e8a28$var$focusFirst(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) {
    $d3863c46a17e8a28$var$focus(candidate, {
      select
    });
    if (document.activeElement !== previouslyFocusedElement)
      return;
  }
}
function $d3863c46a17e8a28$var$getTabbableEdges(container) {
  const candidates = $d3863c46a17e8a28$var$getTabbableCandidates(container);
  const first = $d3863c46a17e8a28$var$findVisible(candidates, container);
  const last = $d3863c46a17e8a28$var$findVisible(candidates.reverse(), container);
  return [
    first,
    last
  ];
}
function $d3863c46a17e8a28$var$getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
function $d3863c46a17e8a28$var$findVisible(elements, container) {
  for (const element of elements) {
    if (!$d3863c46a17e8a28$var$isHidden(element, {
      upTo: container
    }))
      return element;
  }
}
function $d3863c46a17e8a28$var$isHidden(node, { upTo }) {
  if (getComputedStyle(node).visibility === "hidden")
    return true;
  while (node) {
    if (upTo !== void 0 && node === upTo)
      return false;
    if (getComputedStyle(node).display === "none")
      return true;
    node = node.parentElement;
  }
  return false;
}
function $d3863c46a17e8a28$var$isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
function $d3863c46a17e8a28$var$focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;
    element.focus({
      preventScroll: true
    });
    if (element !== previouslyFocusedElement && $d3863c46a17e8a28$var$isSelectableInput(element) && select)
      element.select();
  }
}
var $d3863c46a17e8a28$var$focusScopesStack = $d3863c46a17e8a28$var$createFocusScopesStack();
function $d3863c46a17e8a28$var$createFocusScopesStack() {
  let stack = [];
  return {
    add(focusScope) {
      const activeFocusScope = stack[0];
      if (focusScope !== activeFocusScope)
        activeFocusScope === null || activeFocusScope === void 0 || activeFocusScope.pause();
      stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
      stack.unshift(focusScope);
    },
    remove(focusScope) {
      var _stack$;
      stack = $d3863c46a17e8a28$var$arrayRemove(stack, focusScope);
      (_stack$ = stack[0]) === null || _stack$ === void 0 || _stack$.resume();
    }
  };
}
function $d3863c46a17e8a28$var$arrayRemove(array, item) {
  const updatedArray = [
    ...array
  ];
  const index = updatedArray.indexOf(item);
  if (index !== -1)
    updatedArray.splice(index, 1);
  return updatedArray;
}
function $d3863c46a17e8a28$var$removeLinks(items) {
  return items.filter(
    (item) => item.tagName !== "A"
  );
}

// node_modules/cmdk/node_modules/@radix-ui/react-portal/dist/index.module.js
var import_react11 = __toESM(require_react());
var import_react_dom2 = __toESM(require_react_dom());
var $f1701beae083dbae$export$602eac185826482c = /* @__PURE__ */ (0, import_react11.forwardRef)((props, forwardedRef) => {
  var _globalThis$document;
  const { container = globalThis === null || globalThis === void 0 ? void 0 : (_globalThis$document = globalThis.document) === null || _globalThis$document === void 0 ? void 0 : _globalThis$document.body, ...portalProps } = props;
  return container ? /* @__PURE__ */ import_react_dom2.default.createPortal(/* @__PURE__ */ (0, import_react11.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d0342.div, _extends({}, portalProps, {
    ref: forwardedRef
  })), container) : null;
});

// node_modules/cmdk/node_modules/@radix-ui/react-presence/dist/index.module.js
var import_react12 = __toESM(require_react());
var import_react_dom3 = __toESM(require_react_dom());
function $fe963b355347cc68$export$3e6543de14f8614f(initialState, machine) {
  return (0, import_react12.useReducer)((state, event) => {
    const nextState = machine[state][event];
    return nextState !== null && nextState !== void 0 ? nextState : state;
  }, initialState);
}
var $921a889cee6df7e8$export$99c2b779aa4e8b8b = (props) => {
  const { present, children } = props;
  const presence = $921a889cee6df7e8$var$usePresence(present);
  const child = typeof children === "function" ? children({
    present: presence.isPresent
  }) : import_react12.Children.only(children);
  const ref = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(presence.ref, child.ref);
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? /* @__PURE__ */ (0, import_react12.cloneElement)(child, {
    ref
  }) : null;
};
$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = "Presence";
function $921a889cee6df7e8$var$usePresence(present) {
  const [node1, setNode] = (0, import_react12.useState)();
  const stylesRef = (0, import_react12.useRef)({});
  const prevPresentRef = (0, import_react12.useRef)(present);
  const prevAnimationNameRef = (0, import_react12.useRef)("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = $fe963b355347cc68$export$3e6543de14f8614f(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  (0, import_react12.useEffect)(() => {
    const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [
    state
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(styles);
      if (present)
        send("MOUNT");
      else if (currentAnimationName === "none" || (styles === null || styles === void 0 ? void 0 : styles.display) === "none")
        send("UNMOUNT");
      else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating)
          send("ANIMATION_OUT");
        else
          send("UNMOUNT");
      }
      prevPresentRef.current = present;
    }
  }, [
    present,
    send
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (node1) {
      const handleAnimationEnd = (event) => {
        const currentAnimationName = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === node1 && isCurrentAnimation)
          (0, import_react_dom3.flushSync)(
            () => send("ANIMATION_END")
          );
      };
      const handleAnimationStart = (event) => {
        if (event.target === node1)
          prevAnimationNameRef.current = $921a889cee6df7e8$var$getAnimationName(stylesRef.current);
      };
      node1.addEventListener("animationstart", handleAnimationStart);
      node1.addEventListener("animationcancel", handleAnimationEnd);
      node1.addEventListener("animationend", handleAnimationEnd);
      return () => {
        node1.removeEventListener("animationstart", handleAnimationStart);
        node1.removeEventListener("animationcancel", handleAnimationEnd);
        node1.removeEventListener("animationend", handleAnimationEnd);
      };
    } else
      send("ANIMATION_END");
  }, [
    node1,
    send
  ]);
  return {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(state),
    ref: (0, import_react12.useCallback)((node) => {
      if (node)
        stylesRef.current = getComputedStyle(node);
      setNode(node);
    }, [])
  };
}
function $921a889cee6df7e8$var$getAnimationName(styles) {
  return (styles === null || styles === void 0 ? void 0 : styles.animationName) || "none";
}

// node_modules/cmdk/node_modules/@radix-ui/react-focus-guards/dist/index.module.js
var import_react13 = __toESM(require_react());
var $3db38b7d1fb3fe6a$var$count = 0;
function $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c() {
  (0, import_react13.useEffect)(() => {
    var _edgeGuards$, _edgeGuards$2;
    const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", (_edgeGuards$ = edgeGuards[0]) !== null && _edgeGuards$ !== void 0 ? _edgeGuards$ : $3db38b7d1fb3fe6a$var$createFocusGuard());
    document.body.insertAdjacentElement("beforeend", (_edgeGuards$2 = edgeGuards[1]) !== null && _edgeGuards$2 !== void 0 ? _edgeGuards$2 : $3db38b7d1fb3fe6a$var$createFocusGuard());
    $3db38b7d1fb3fe6a$var$count++;
    return () => {
      if ($3db38b7d1fb3fe6a$var$count === 1)
        document.querySelectorAll("[data-radix-focus-guard]").forEach(
          (node) => node.remove()
        );
      $3db38b7d1fb3fe6a$var$count--;
    };
  }, []);
}
function $3db38b7d1fb3fe6a$var$createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none";
  return element;
}

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/Combination.js
var React5 = __toESM(require_react());

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/UI.js
var React3 = __toESM(require_react());

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React3.forwardRef(function(props, parentRef) {
  var ref = React3.useRef(null);
  var _a = React3.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
  var SideCar = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React3.createElement(
    React3.Fragment,
    null,
    enabled && React3.createElement(SideCar, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref }),
    forwardProps ? React3.cloneElement(React3.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React3.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var React4 = __toESM(require_react());

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported2 = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported2 = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported2 = false;
  }
}
var options;
var nonPassive = passiveSupported2 ? { passive: false } : false;

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var elementCouldBeVScrolled = function(node) {
  var styles = window.getComputedStyle(node);
  return styles.overflowY !== "hidden" && // not-not-scrollable
  !(styles.overflowY === styles.overflowX && styles.overflowY === "visible");
};
var elementCouldBeHScrolled = function(node) {
  var styles = window.getComputedStyle(node);
  return styles.overflowX !== "hidden" && // not-not-scrollable
  !(styles.overflowY === styles.overflowX && styles.overflowX === "visible");
};
var locationCouldBeScrolled = function(axis, node) {
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
      if (s > d) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== document.body);
  return false;
};
var getVScrollVariables = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    target = target.parentNode;
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (noOverscroll && availableScroll === 0 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && availableScrollTop === 0 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
  return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React4.useRef([]);
  var touchStartRef = React4.useRef([0, 0]);
  var activeAxis = React4.useRef();
  var id = React4.useState(idCounter++)[0];
  var Style = React4.useState(function() {
    return styleSingleton();
  })[0];
  var lastProps = React4.useRef(props);
  React4.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React4.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React4.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React4.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e) {
      return e.name === event.type && e.target === event.target && deltaCompare(e.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      event.preventDefault();
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        event.preventDefault();
      }
    }
  }, []);
  var shouldCancel = React4.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
        return e !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React4.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React4.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React4.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React4.useEffect(function() {
    lockStack.push(Style);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React4.createElement(
    React4.Fragment,
    null,
    inert ? React4.createElement(Style, { styles: generateStyle(id) }) : null,
    removeScrollBar ? React4.createElement(RemoveScrollBar, { gapMode: "margin" }) : null
  );
}

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// node_modules/cmdk/node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React5.forwardRef(function(props, ref) {
  return React5.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll;

// node_modules/cmdk/node_modules/@radix-ui/react-dialog/dist/index.module.js
var $5d3850c4d0b4e6c7$var$DIALOG_NAME = "Dialog";
var [$5d3850c4d0b4e6c7$var$createDialogContext, $5d3850c4d0b4e6c7$export$cc702773b8ea3e41] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($5d3850c4d0b4e6c7$var$DIALOG_NAME);
var [$5d3850c4d0b4e6c7$var$DialogProvider, $5d3850c4d0b4e6c7$var$useDialogContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$DIALOG_NAME);
var $5d3850c4d0b4e6c7$export$3ddf2d174ce01153 = (props) => {
  const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
  const triggerRef = (0, import_react14.useRef)(null);
  const contentRef = (0, import_react14.useRef)(null);
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ (0, import_react14.createElement)($5d3850c4d0b4e6c7$var$DialogProvider, {
    scope: __scopeDialog,
    triggerRef,
    contentRef,
    contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
    titleId: $1746a345f3d73bb7$export$f680877a34711e37(),
    descriptionId: $1746a345f3d73bb7$export$f680877a34711e37(),
    open,
    onOpenChange: setOpen,
    onOpenToggle: (0, import_react14.useCallback)(
      () => setOpen(
        (prevOpen) => !prevOpen
      ),
      [
        setOpen
      ]
    ),
    modal
  }, children);
};
var $5d3850c4d0b4e6c7$var$PORTAL_NAME = "DialogPortal";
var [$5d3850c4d0b4e6c7$var$PortalProvider, $5d3850c4d0b4e6c7$var$usePortalContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, {
  forceMount: void 0
});
var $5d3850c4d0b4e6c7$export$dad7c95542bacce0 = (props) => {
  const { __scopeDialog, forceMount, children, container } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, __scopeDialog);
  return /* @__PURE__ */ (0, import_react14.createElement)($5d3850c4d0b4e6c7$var$PortalProvider, {
    scope: __scopeDialog,
    forceMount
  }, import_react14.Children.map(
    children,
    (child) => /* @__PURE__ */ (0, import_react14.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
      present: forceMount || context.open
    }, /* @__PURE__ */ (0, import_react14.createElement)($f1701beae083dbae$export$602eac185826482c, {
      asChild: true,
      container
    }, child))
  ));
};
var $5d3850c4d0b4e6c7$var$OVERLAY_NAME = "DialogOverlay";
var $5d3850c4d0b4e6c7$export$bd1d06c79be19e17 = /* @__PURE__ */ (0, import_react14.forwardRef)((props, forwardedRef) => {
  const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
  const { forceMount = portalContext.forceMount, ...overlayProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
  return context.modal ? /* @__PURE__ */ (0, import_react14.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, /* @__PURE__ */ (0, import_react14.createElement)($5d3850c4d0b4e6c7$var$DialogOverlayImpl, _extends({}, overlayProps, {
    ref: forwardedRef
  }))) : null;
});
var $5d3850c4d0b4e6c7$var$DialogOverlayImpl = /* @__PURE__ */ (0, import_react14.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, ...overlayProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, __scopeDialog);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ (0, import_react14.createElement)(Combination_default, {
      as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
      allowPinchZoom: true,
      shards: [
        context.contentRef
      ]
    }, /* @__PURE__ */ (0, import_react14.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d0342.div, _extends({
      "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
    }, overlayProps, {
      ref: forwardedRef,
      style: {
        pointerEvents: "auto",
        ...overlayProps.style
      }
    })))
  );
});
var $5d3850c4d0b4e6c7$var$CONTENT_NAME = "DialogContent";
var $5d3850c4d0b4e6c7$export$b6d9565de1e068cf = /* @__PURE__ */ (0, import_react14.forwardRef)((props, forwardedRef) => {
  const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const { forceMount = portalContext.forceMount, ...contentProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  return /* @__PURE__ */ (0, import_react14.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, context.modal ? /* @__PURE__ */ (0, import_react14.createElement)($5d3850c4d0b4e6c7$var$DialogContentModal, _extends({}, contentProps, {
    ref: forwardedRef
  })) : /* @__PURE__ */ (0, import_react14.createElement)($5d3850c4d0b4e6c7$var$DialogContentNonModal, _extends({}, contentProps, {
    ref: forwardedRef
  })));
});
var $5d3850c4d0b4e6c7$var$DialogContentModal = /* @__PURE__ */ (0, import_react14.forwardRef)((props, forwardedRef) => {
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const contentRef = (0, import_react14.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.contentRef, contentRef);
  (0, import_react14.useEffect)(() => {
    const content = contentRef.current;
    if (content)
      return hideOthers(content);
  }, []);
  return /* @__PURE__ */ (0, import_react14.createElement)($5d3850c4d0b4e6c7$var$DialogContentImpl, _extends({}, props, {
    ref: composedRefs,
    trapFocus: context.open,
    disableOutsidePointerEvents: true,
    onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onCloseAutoFocus, (event) => {
      var _context$triggerRef$c;
      event.preventDefault();
      (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
    }),
    onPointerDownOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownOutside, (event) => {
      const originalEvent = event.detail.originalEvent;
      const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
      const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
      if (isRightClick)
        event.preventDefault();
    }),
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocusOutside,
      (event) => event.preventDefault()
    )
  }));
});
var $5d3850c4d0b4e6c7$var$DialogContentNonModal = /* @__PURE__ */ (0, import_react14.forwardRef)((props, forwardedRef) => {
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const hasInteractedOutsideRef = (0, import_react14.useRef)(false);
  return /* @__PURE__ */ (0, import_react14.createElement)($5d3850c4d0b4e6c7$var$DialogContentImpl, _extends({}, props, {
    ref: forwardedRef,
    trapFocus: false,
    disableOutsidePointerEvents: false,
    onCloseAutoFocus: (event) => {
      var _props$onCloseAutoFoc;
      (_props$onCloseAutoFoc = props.onCloseAutoFocus) === null || _props$onCloseAutoFoc === void 0 || _props$onCloseAutoFoc.call(props, event);
      if (!event.defaultPrevented) {
        var _context$triggerRef$c2;
        if (!hasInteractedOutsideRef.current)
          (_context$triggerRef$c2 = context.triggerRef.current) === null || _context$triggerRef$c2 === void 0 || _context$triggerRef$c2.focus();
        event.preventDefault();
      }
      hasInteractedOutsideRef.current = false;
    },
    onInteractOutside: (event) => {
      var _props$onInteractOuts, _context$triggerRef$c3;
      (_props$onInteractOuts = props.onInteractOutside) === null || _props$onInteractOuts === void 0 || _props$onInteractOuts.call(props, event);
      if (!event.defaultPrevented)
        hasInteractedOutsideRef.current = true;
      const target = event.target;
      const targetIsTrigger = (_context$triggerRef$c3 = context.triggerRef.current) === null || _context$triggerRef$c3 === void 0 ? void 0 : _context$triggerRef$c3.contains(target);
      if (targetIsTrigger)
        event.preventDefault();
    }
  }));
});
var $5d3850c4d0b4e6c7$var$DialogContentImpl = /* @__PURE__ */ (0, import_react14.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, __scopeDialog);
  const contentRef = (0, import_react14.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef);
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
  return /* @__PURE__ */ (0, import_react14.createElement)(import_react14.Fragment, null, /* @__PURE__ */ (0, import_react14.createElement)($d3863c46a17e8a28$export$20e40289641fbbb6, {
    asChild: true,
    loop: true,
    trapped: trapFocus,
    onMountAutoFocus: onOpenAutoFocus,
    onUnmountAutoFocus: onCloseAutoFocus
  }, /* @__PURE__ */ (0, import_react14.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22, _extends({
    role: "dialog",
    id: context.contentId,
    "aria-describedby": context.descriptionId,
    "aria-labelledby": context.titleId,
    "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
  }, contentProps, {
    ref: composedRefs,
    onDismiss: () => context.onOpenChange(false)
  }))), false);
});
var $5d3850c4d0b4e6c7$var$TITLE_NAME = "DialogTitle";
function $5d3850c4d0b4e6c7$var$getState(open) {
  return open ? "open" : "closed";
}
var $5d3850c4d0b4e6c7$var$TITLE_WARNING_NAME = "DialogTitleWarning";
var [$5d3850c4d0b4e6c7$export$69b62a49393917d6, $5d3850c4d0b4e6c7$var$useWarningContext] = $c512c27ab02ef895$export$fd42f52fd3ae1109($5d3850c4d0b4e6c7$var$TITLE_WARNING_NAME, {
  contentName: $5d3850c4d0b4e6c7$var$CONTENT_NAME,
  titleName: $5d3850c4d0b4e6c7$var$TITLE_NAME,
  docsSlug: "dialog"
});
var $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9 = $5d3850c4d0b4e6c7$export$3ddf2d174ce01153;
var $5d3850c4d0b4e6c7$export$602eac185826482c = $5d3850c4d0b4e6c7$export$dad7c95542bacce0;
var $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff = $5d3850c4d0b4e6c7$export$bd1d06c79be19e17;
var $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2 = $5d3850c4d0b4e6c7$export$b6d9565de1e068cf;

// node_modules/cmdk/dist/index.mjs
var t = __toESM(require_react(), 1);
var fe = '[cmdk-list-sizer=""]';
var O = '[cmdk-group=""]';
var U2 = '[cmdk-group-items=""]';
var me = '[cmdk-group-heading=""]';
var W2 = '[cmdk-item=""]';
var ae = `${W2}:not([aria-disabled="true"])`;
var B2 = "cmdk-item-select";
var S = "data-value";
var pe = (r, c) => W(r, c);
var se = t.createContext(void 0);
var A = () => t.useContext(se);
var ie = t.createContext(void 0);
var J2 = () => t.useContext(ie);
var ce = t.createContext(void 0);
var le = t.forwardRef((r, c) => {
  let n = t.useRef(null), o = w(() => {
    var e, s, a2;
    return { search: "", value: (a2 = (s = r.value) != null ? s : (e = r.defaultValue) == null ? void 0 : e.toLowerCase()) != null ? a2 : "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), l = w(() => /* @__PURE__ */ new Set()), d = w(() => /* @__PURE__ */ new Map()), f = w(() => /* @__PURE__ */ new Map()), g = w(() => /* @__PURE__ */ new Set()), u2 = ue(r), { label: b, children: p2, value: R, onValueChange: T, filter: I, shouldFilter: C, vimBindings: F = true, ...P } = r, Q = t.useId(), K2 = t.useId(), V = t.useId(), E = Le();
  D2(() => {
    if (R !== void 0) {
      let e = R.trim().toLowerCase();
      o.current.value = e, E(6, Y2), m2.emit();
    }
  }, [R]);
  let m2 = t.useMemo(() => ({ subscribe: (e) => (g.current.add(e), () => g.current.delete(e)), snapshot: () => o.current, setState: (e, s, a2) => {
    var i, v, h;
    if (!Object.is(o.current[e], s)) {
      if (o.current[e] = s, e === "search")
        $(), N(), E(1, j);
      else if (e === "value")
        if (((i = u2.current) == null ? void 0 : i.value) !== void 0) {
          let x = s != null ? s : "";
          (h = (v = u2.current).onValueChange) == null || h.call(v, x);
          return;
        } else
          a2 || E(5, Y2);
      m2.emit();
    }
  }, emit: () => {
    g.current.forEach((e) => e());
  } }), []), M = t.useMemo(() => ({ value: (e, s) => {
    s !== f.current.get(e) && (f.current.set(e, s), o.current.filtered.items.set(e, X2(s)), E(2, () => {
      N(), m2.emit();
    }));
  }, item: (e, s) => (l.current.add(e), s && (d.current.has(s) ? d.current.get(s).add(e) : d.current.set(s, /* @__PURE__ */ new Set([e]))), E(3, () => {
    $(), N(), o.current.value || j(), m2.emit();
  }), () => {
    f.current.delete(e), l.current.delete(e), o.current.filtered.items.delete(e);
    let a2 = k2();
    E(4, () => {
      $(), (a2 == null ? void 0 : a2.getAttribute("id")) === e && j(), m2.emit();
    });
  }), group: (e) => (d.current.has(e) || d.current.set(e, /* @__PURE__ */ new Set()), () => {
    f.current.delete(e), d.current.delete(e);
  }), filter: () => u2.current.shouldFilter, label: b || r["aria-label"], commandRef: n, listId: Q, inputId: V, labelId: K2 }), []);
  function X2(e) {
    var a2, i;
    let s = (i = (a2 = u2.current) == null ? void 0 : a2.filter) != null ? i : pe;
    return e ? s(e, o.current.search) : 0;
  }
  function N() {
    if (!n.current || !o.current.search || u2.current.shouldFilter === false)
      return;
    let e = o.current.filtered.items, s = [];
    o.current.filtered.groups.forEach((i) => {
      let v = d.current.get(i), h = 0;
      v.forEach((x) => {
        let G2 = e.get(x);
        h = Math.max(G2, h);
      }), s.push([i, h]);
    });
    let a2 = n.current.querySelector(fe);
    H2().sort((i, v) => {
      var G2, re;
      let h = i.getAttribute(S), x = v.getAttribute(S);
      return ((G2 = e.get(x)) != null ? G2 : 0) - ((re = e.get(h)) != null ? re : 0);
    }).forEach((i) => {
      let v = i.closest(U2);
      v ? v.appendChild(i.parentElement === v ? i : i.closest(`${U2} > *`)) : a2.appendChild(i.parentElement === a2 ? i : i.closest(`${U2} > *`));
    }), s.sort((i, v) => v[1] - i[1]).forEach((i) => {
      let v = n.current.querySelector(`${O}[${S}="${i[0]}"]`);
      v == null || v.parentElement.appendChild(v);
    });
  }
  function j() {
    let e = H2().find((a2) => !a2.ariaDisabled), s = e == null ? void 0 : e.getAttribute(S);
    m2.setState("value", s || void 0);
  }
  function $() {
    if (!o.current.search || u2.current.shouldFilter === false) {
      o.current.filtered.count = l.current.size;
      return;
    }
    o.current.filtered.groups = /* @__PURE__ */ new Set();
    let e = 0;
    for (let s of l.current) {
      let a2 = f.current.get(s), i = X2(a2);
      o.current.filtered.items.set(s, i), i > 0 && e++;
    }
    for (let [s, a2] of d.current)
      for (let i of a2)
        if (o.current.filtered.items.get(i) > 0) {
          o.current.filtered.groups.add(s);
          break;
        }
    o.current.filtered.count = e;
  }
  function Y2() {
    var s, a2, i;
    let e = k2();
    e && (((s = e.parentElement) == null ? void 0 : s.firstChild) === e && ((i = (a2 = e.closest(O)) == null ? void 0 : a2.querySelector(me)) == null || i.scrollIntoView({ block: "nearest" })), e.scrollIntoView({ block: "nearest" }));
  }
  function k2() {
    var e;
    return (e = n.current) == null ? void 0 : e.querySelector(`${W2}[aria-selected="true"]`);
  }
  function H2() {
    return Array.from(n.current.querySelectorAll(ae));
  }
  function q(e) {
    let a2 = H2()[e];
    a2 && m2.setState("value", a2.getAttribute(S));
  }
  function z(e) {
    var h;
    let s = k2(), a2 = H2(), i = a2.findIndex((x) => x === s), v = a2[i + e];
    (h = u2.current) != null && h.loop && (v = i + e < 0 ? a2[a2.length - 1] : i + e === a2.length ? a2[0] : a2[i + e]), v && m2.setState("value", v.getAttribute(S));
  }
  function Z(e) {
    let s = k2(), a2 = s == null ? void 0 : s.closest(O), i;
    for (; a2 && !i; )
      a2 = e > 0 ? ye(a2, O) : xe(a2, O), i = a2 == null ? void 0 : a2.querySelector(ae);
    i ? m2.setState("value", i.getAttribute(S)) : z(e);
  }
  let ee = () => q(H2().length - 1), te = (e) => {
    e.preventDefault(), e.metaKey ? ee() : e.altKey ? Z(1) : z(1);
  }, ne = (e) => {
    e.preventDefault(), e.metaKey ? q(0) : e.altKey ? Z(-1) : z(-1);
  };
  return t.createElement("div", { ref: _([n, c]), ...P, "cmdk-root": "", onKeyDown: (e) => {
    var s;
    if ((s = P.onKeyDown) == null || s.call(P, e), !e.defaultPrevented)
      switch (e.key) {
        case "n":
        case "j": {
          F && e.ctrlKey && te(e);
          break;
        }
        case "ArrowDown": {
          te(e);
          break;
        }
        case "p":
        case "k": {
          F && e.ctrlKey && ne(e);
          break;
        }
        case "ArrowUp": {
          ne(e);
          break;
        }
        case "Home": {
          e.preventDefault(), q(0);
          break;
        }
        case "End": {
          e.preventDefault(), ee();
          break;
        }
        case "Enter":
          if (!e.nativeEvent.isComposing) {
            e.preventDefault();
            let a2 = k2();
            if (a2) {
              let i = new Event(B2);
              a2.dispatchEvent(i);
            }
          }
      }
  } }, t.createElement("label", { "cmdk-label": "", htmlFor: M.inputId, id: M.labelId, style: Te }, b), t.createElement(ie.Provider, { value: m2 }, t.createElement(se.Provider, { value: M }, p2)));
});
var ve = t.forwardRef((r, c) => {
  var V, E;
  let n = t.useId(), o = t.useRef(null), l = t.useContext(ce), d = A(), f = ue(r), g = (E = (V = f.current) == null ? void 0 : V.forceMount) != null ? E : l == null ? void 0 : l.forceMount;
  D2(() => d.item(n, l == null ? void 0 : l.id), []);
  let u2 = de(n, o, [r.value, r.children, o]), b = J2(), p2 = L((m2) => m2.value && m2.value === u2.current), R = L((m2) => g || d.filter() === false ? true : m2.search ? m2.filtered.items.get(n) > 0 : true);
  t.useEffect(() => {
    let m2 = o.current;
    if (!(!m2 || r.disabled))
      return m2.addEventListener(B2, T), () => m2.removeEventListener(B2, T);
  }, [R, r.onSelect, r.disabled]);
  function T() {
    var m2, M;
    I(), (M = (m2 = f.current).onSelect) == null || M.call(m2, u2.current);
  }
  function I() {
    b.setState("value", u2.current, true);
  }
  if (!R)
    return null;
  let { disabled: C, value: F, onSelect: P, forceMount: Q, ...K2 } = r;
  return t.createElement("div", { ref: _([o, c]), ...K2, id: n, "cmdk-item": "", role: "option", "aria-disabled": C || void 0, "aria-selected": p2 || void 0, "data-disabled": C || void 0, "data-selected": p2 || void 0, onPointerMove: C ? void 0 : I, onClick: C ? void 0 : T }, r.children);
});
var ge = t.forwardRef((r, c) => {
  let { heading: n, children: o, forceMount: l, ...d } = r, f = t.useId(), g = t.useRef(null), u2 = t.useRef(null), b = t.useId(), p2 = A(), R = L((C) => l || p2.filter() === false ? true : C.search ? C.filtered.groups.has(f) : true);
  D2(() => p2.group(f), []), de(f, g, [r.value, r.heading, u2]);
  let T = t.useMemo(() => ({ id: f, forceMount: l }), [l]), I = t.createElement(ce.Provider, { value: T }, o);
  return t.createElement("div", { ref: _([g, c]), ...d, "cmdk-group": "", role: "presentation", hidden: R ? void 0 : true }, n && t.createElement("div", { ref: u2, "cmdk-group-heading": "", "aria-hidden": true, id: b }, n), t.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? b : void 0 }, I));
});
var Re = t.forwardRef((r, c) => {
  let { alwaysRender: n, ...o } = r, l = t.useRef(null), d = L((f) => !f.search);
  return !n && !d ? null : t.createElement("div", { ref: _([l, c]), ...o, "cmdk-separator": "", role: "separator" });
});
var be = t.forwardRef((r, c) => {
  let { onValueChange: n, ...o } = r, l = r.value != null, d = J2(), f = L((p2) => p2.search), g = L((p2) => p2.value), u2 = A(), b = t.useMemo(() => {
    var R;
    let p2 = (R = u2.commandRef.current) == null ? void 0 : R.querySelector(`${W2}[${S}="${g}"]`);
    return p2 == null ? void 0 : p2.getAttribute("id");
  }, [g, u2.commandRef]);
  return t.useEffect(() => {
    r.value != null && d.setState("search", r.value);
  }, [r.value]), t.createElement("input", { ref: c, ...o, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: false, "aria-autocomplete": "list", role: "combobox", "aria-expanded": true, "aria-controls": u2.listId, "aria-labelledby": u2.labelId, "aria-activedescendant": b, id: u2.inputId, type: "text", value: l ? r.value : f, onChange: (p2) => {
    l || d.setState("search", p2.target.value), n == null || n(p2.target.value);
  } });
});
var he = t.forwardRef((r, c) => {
  let { children: n, ...o } = r, l = t.useRef(null), d = t.useRef(null), f = A();
  return t.useEffect(() => {
    if (d.current && l.current) {
      let g = d.current, u2 = l.current, b, p2 = new ResizeObserver(() => {
        b = requestAnimationFrame(() => {
          let R = g.offsetHeight;
          u2.style.setProperty("--cmdk-list-height", R.toFixed(1) + "px");
        });
      });
      return p2.observe(g), () => {
        cancelAnimationFrame(b), p2.unobserve(g);
      };
    }
  }, []), t.createElement("div", { ref: _([l, c]), ...o, "cmdk-list": "", role: "listbox", "aria-label": "Suggestions", id: f.listId, "aria-labelledby": f.inputId }, t.createElement("div", { ref: d, "cmdk-list-sizer": "" }, n));
});
var Ee = t.forwardRef((r, c) => {
  let { open: n, onOpenChange: o, overlayClassName: l, contentClassName: d, container: f, ...g } = r;
  return t.createElement($5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9, { open: n, onOpenChange: o }, t.createElement($5d3850c4d0b4e6c7$export$602eac185826482c, { container: f }, t.createElement($5d3850c4d0b4e6c7$export$c6fdb837b070b4ff, { "cmdk-overlay": "", className: l }), t.createElement($5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2, { "aria-label": r.label, "cmdk-dialog": "", className: d }, t.createElement(le, { ref: c, ...g }))));
});
var Se = t.forwardRef((r, c) => {
  let n = t.useRef(true), o = L((l) => l.filtered.count === 0);
  return t.useEffect(() => {
    n.current = false;
  }, []), n.current || !o ? null : t.createElement("div", { ref: c, ...r, "cmdk-empty": "", role: "presentation" });
});
var Ce = t.forwardRef((r, c) => {
  let { progress: n, children: o, ...l } = r;
  return t.createElement("div", { ref: c, ...l, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Loading..." }, t.createElement("div", { "aria-hidden": true }, o));
});
var we = Object.assign(le, { List: he, Item: ve, Input: be, Group: ge, Separator: Re, Dialog: Ee, Empty: Se, Loading: Ce });
function ye(r, c) {
  let n = r.nextElementSibling;
  for (; n; ) {
    if (n.matches(c))
      return n;
    n = n.nextElementSibling;
  }
}
function xe(r, c) {
  let n = r.previousElementSibling;
  for (; n; ) {
    if (n.matches(c))
      return n;
    n = n.previousElementSibling;
  }
}
function ue(r) {
  let c = t.useRef(r);
  return D2(() => {
    c.current = r;
  }), c;
}
var D2 = typeof window == "undefined" ? t.useEffect : t.useLayoutEffect;
function w(r) {
  let c = t.useRef();
  return c.current === void 0 && (c.current = r()), c;
}
function _(r) {
  return (c) => {
    r.forEach((n) => {
      typeof n == "function" ? n(c) : n != null && (n.current = c);
    });
  };
}
function L(r) {
  let c = J2(), n = () => r(c.snapshot());
  return t.useSyncExternalStore(c.subscribe, n, n);
}
function de(r, c, n) {
  let o = t.useRef(), l = A();
  return D2(() => {
    var f;
    let d = (() => {
      var g;
      for (let u2 of n) {
        if (typeof u2 == "string")
          return u2.trim().toLowerCase();
        if (typeof u2 == "object" && "current" in u2)
          return u2.current ? (g = u2.current.textContent) == null ? void 0 : g.trim().toLowerCase() : o.current;
      }
    })();
    l.value(r, d), (f = c.current) == null || f.setAttribute(S, d), o.current = d;
  }), o;
}
var Le = () => {
  let [r, c] = t.useState(), n = w(() => /* @__PURE__ */ new Map());
  return D2(() => {
    n.current.forEach((o) => o()), n.current = /* @__PURE__ */ new Map();
  }, [r]), (o, l) => {
    n.current.set(o, l), c({});
  };
};
var Te = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };

// app/shared/ui/Command/Command.tsx
var React6 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/shared/ui/Command/Command.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/shared/ui/Command/Command.tsx"
  );
  import.meta.hot.lastModified = "1706588338081.0872";
}
var Command = React6.forwardRef(_c17 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(we, { ref, className: cn("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className), ...props }, void 0, false, {
  fileName: "app/shared/ui/Command/Command.tsx",
  lineNumber: 29,
  columnNumber: 12
}, this));
_c22 = Command;
Command.displayName = we.displayName;
var CommandDialog = ({
  children,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dialog, { ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DialogContent, { className: "overflow-hidden p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Command, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:size-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:size-5", children }, void 0, false, {
    fileName: "app/shared/ui/Command/Command.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/shared/ui/Command/Command.tsx",
    lineNumber: 37,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/shared/ui/Command/Command.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
};
_c32 = CommandDialog;
var CommandInput = React6.forwardRef(_c42 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { name: "magnifying-glass", size: "sm", className: "mr-2 shrink-0 opacity-50" }, void 0, false, {
    fileName: "app/shared/ui/Command/Command.tsx",
    lineNumber: 49,
    columnNumber: 3
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(we.Input, { ref, className: cn("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className), ...props }, void 0, false, {
    fileName: "app/shared/ui/Command/Command.tsx",
    lineNumber: 50,
    columnNumber: 3
  }, this)
] }, void 0, true, {
  fileName: "app/shared/ui/Command/Command.tsx",
  lineNumber: 48,
  columnNumber: 12
}, this));
_c52 = CommandInput;
CommandInput.displayName = we.Input.displayName;
var CommandList = React6.forwardRef(_c62 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(we.List, { ref, className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className), ...props }, void 0, false, {
  fileName: "app/shared/ui/Command/Command.tsx",
  lineNumber: 57,
  columnNumber: 12
}, this));
_c72 = CommandList;
CommandList.displayName = we.List.displayName;
var CommandEmpty = React6.forwardRef(_c82 = (props, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(we.Empty, { ref, className: "py-6 text-center text-sm", ...props }, void 0, false, {
  fileName: "app/shared/ui/Command/Command.tsx",
  lineNumber: 60,
  columnNumber: 61
}, this));
_c92 = CommandEmpty;
CommandEmpty.displayName = we.Empty.displayName;
var CommandGroup = React6.forwardRef(_c102 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(we.Group, { ref, className: cn("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", className), ...props }, void 0, false, {
  fileName: "app/shared/ui/Command/Command.tsx",
  lineNumber: 66,
  columnNumber: 12
}, this));
_c112 = CommandGroup;
CommandGroup.displayName = we.Group.displayName;
var CommandSeparator = React6.forwardRef(_c122 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(we.Separator, { ref, className: cn("-mx-1 h-px bg-border", className), ...props }, void 0, false, {
  fileName: "app/shared/ui/Command/Command.tsx",
  lineNumber: 72,
  columnNumber: 12
}, this));
_c132 = CommandSeparator;
CommandSeparator.displayName = we.Separator.displayName;
var CommandItem = React6.forwardRef(_c142 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(we.Item, { ref, className: cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), ...props }, void 0, false, {
  fileName: "app/shared/ui/Command/Command.tsx",
  lineNumber: 78,
  columnNumber: 12
}, this));
_c152 = CommandItem;
CommandItem.displayName = we.Item.displayName;
var CommandShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: cn("ml-auto text-xs tracking-widest text-muted-foreground", className), ...props }, void 0, false, {
    fileName: "app/shared/ui/Command/Command.tsx",
    lineNumber: 85,
    columnNumber: 10
  }, this);
};
_c162 = CommandShortcut;
CommandShortcut.displayName = "CommandShortcut";
var _c17;
var _c22;
var _c32;
var _c42;
var _c52;
var _c62;
var _c72;
var _c82;
var _c92;
var _c102;
var _c112;
var _c122;
var _c132;
var _c142;
var _c152;
var _c162;
$RefreshReg$(_c17, "Command$React.forwardRef");
$RefreshReg$(_c22, "Command");
$RefreshReg$(_c32, "CommandDialog");
$RefreshReg$(_c42, "CommandInput$React.forwardRef");
$RefreshReg$(_c52, "CommandInput");
$RefreshReg$(_c62, "CommandList$React.forwardRef");
$RefreshReg$(_c72, "CommandList");
$RefreshReg$(_c82, "CommandEmpty$React.forwardRef");
$RefreshReg$(_c92, "CommandEmpty");
$RefreshReg$(_c102, "CommandGroup$React.forwardRef");
$RefreshReg$(_c112, "CommandGroup");
$RefreshReg$(_c122, "CommandSeparator$React.forwardRef");
$RefreshReg$(_c132, "CommandSeparator");
$RefreshReg$(_c142, "CommandItem$React.forwardRef");
$RefreshReg$(_c152, "CommandItem");
$RefreshReg$(_c162, "CommandShortcut");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// node_modules/@radix-ui/react-separator/dist/index.mjs
var import_react15 = __toESM(require_react(), 1);
var $89eedd556c436f6a$var$DEFAULT_ORIENTATION = "horizontal";
var $89eedd556c436f6a$var$ORIENTATIONS = [
  "horizontal",
  "vertical"
];
var $89eedd556c436f6a$export$1ff3c3f08ae963c0 = /* @__PURE__ */ (0, import_react15.forwardRef)((props, forwardedRef) => {
  const { decorative, orientation: orientationProp = $89eedd556c436f6a$var$DEFAULT_ORIENTATION, ...domProps } = props;
  const orientation = $89eedd556c436f6a$var$isValidOrientation(orientationProp) ? orientationProp : $89eedd556c436f6a$var$DEFAULT_ORIENTATION;
  const ariaOrientation = orientation === "vertical" ? orientation : void 0;
  const semanticProps = decorative ? {
    role: "none"
  } : {
    "aria-orientation": ariaOrientation,
    role: "separator"
  };
  return /* @__PURE__ */ (0, import_react15.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-orientation": orientation
  }, semanticProps, domProps, {
    ref: forwardedRef
  }));
});
$89eedd556c436f6a$export$1ff3c3f08ae963c0.propTypes = {
  orientation(props, propName, componentName) {
    const propValue = props[propName];
    const strVal = String(propValue);
    if (propValue && !$89eedd556c436f6a$var$isValidOrientation(propValue))
      return new Error($89eedd556c436f6a$var$getInvalidOrientationError(strVal, componentName));
    return null;
  }
};
function $89eedd556c436f6a$var$getInvalidOrientationError(value, componentName) {
  return `Invalid prop \`orientation\` of value \`${value}\` supplied to \`${componentName}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${$89eedd556c436f6a$var$DEFAULT_ORIENTATION}\`.`;
}
function $89eedd556c436f6a$var$isValidOrientation(orientation) {
  return $89eedd556c436f6a$var$ORIENTATIONS.includes(orientation);
}
var $89eedd556c436f6a$export$be92b6f5f03c0fe9 = $89eedd556c436f6a$export$1ff3c3f08ae963c0;

// app/shared/ui/Separator/Separator.tsx
var React7 = __toESM(require_react(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/shared/ui/Separator/Separator.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/shared/ui/Separator/Separator.tsx"
  );
  import.meta.hot.lastModified = "1706588338083.462";
}
var Separator = React7.forwardRef(_c18 = ({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($89eedd556c436f6a$export$be92b6f5f03c0fe9, { ref, decorative, orientation, className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className), ...props }, void 0, false, {
  fileName: "app/shared/ui/Separator/Separator.tsx",
  lineNumber: 29,
  columnNumber: 12
}, this));
_c23 = Separator;
Separator.displayName = $89eedd556c436f6a$export$be92b6f5f03c0fe9.displayName;
var _c18;
var _c23;
$RefreshReg$(_c18, "Separator$React.forwardRef");
$RefreshReg$(_c23, "Separator");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/shared/ui/DataTable/DataTable.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/shared/ui/DataTable/DataTable.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/shared/ui/DataTable/DataTable.tsx"
  );
  import.meta.hot.lastModified = "1706588338081.335";
}
function DataTableColumnHeader({
  column,
  title,
  className
}) {
  if (!column.getCanSort()) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: cn(className), children: title }, void 0, false, {
      fileName: "app/shared/ui/DataTable/DataTable.tsx",
      lineNumber: 36,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: cn("flex items-center space-x-2", className), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { variant: "ghost", size: "sm", className: "-ml-3 h-8 data-[state=open]:bg-accent", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: title }, void 0, false, {
        fileName: "app/shared/ui/DataTable/DataTable.tsx",
        lineNumber: 42,
        columnNumber: 7
      }, this),
      column.getIsSorted() === "desc" ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Icon, { name: "arrow-down", size: "sm", className: "ml-2" }, void 0, false, {
        fileName: "app/shared/ui/DataTable/DataTable.tsx",
        lineNumber: 43,
        columnNumber: 42
      }, this) : column.getIsSorted() === "asc" ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Icon, { name: "arrow-up", size: "sm", className: "ml-2" }, void 0, false, {
        fileName: "app/shared/ui/DataTable/DataTable.tsx",
        lineNumber: 43,
        columnNumber: 131
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Icon, { name: "caret-sort", size: "sm", className: "ml-2" }, void 0, false, {
        fileName: "app/shared/ui/DataTable/DataTable.tsx",
        lineNumber: 43,
        columnNumber: 185
      }, this)
    ] }, void 0, true, {
      fileName: "app/shared/ui/DataTable/DataTable.tsx",
      lineNumber: 41,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/shared/ui/DataTable/DataTable.tsx",
      lineNumber: 40,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DropdownMenuContent, { align: "start", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DropdownMenuItem, { onClick: () => column.toggleSorting(false), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Icon, { name: "arrow-up", size: "sm", className: "mr-2 text-muted-foreground/70" }, void 0, false, {
          fileName: "app/shared/ui/DataTable/DataTable.tsx",
          lineNumber: 48,
          columnNumber: 7
        }, this),
        "Asc"
      ] }, void 0, true, {
        fileName: "app/shared/ui/DataTable/DataTable.tsx",
        lineNumber: 47,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DropdownMenuItem, { onClick: () => column.toggleSorting(true), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Icon, { name: "arrow-down", size: "sm", className: "mr-2 text-muted-foreground/70" }, void 0, false, {
          fileName: "app/shared/ui/DataTable/DataTable.tsx",
          lineNumber: 52,
          columnNumber: 7
        }, this),
        "Desc"
      ] }, void 0, true, {
        fileName: "app/shared/ui/DataTable/DataTable.tsx",
        lineNumber: 51,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DropdownMenuSeparator, {}, void 0, false, {
        fileName: "app/shared/ui/DataTable/DataTable.tsx",
        lineNumber: 55,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DropdownMenuItem, { onClick: () => column.toggleVisibility(false), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Icon, { name: "eye-none", size: "sm", className: "mr-2 text-muted-foreground/70" }, void 0, false, {
          fileName: "app/shared/ui/DataTable/DataTable.tsx",
          lineNumber: 57,
          columnNumber: 7
        }, this),
        "Hide"
      ] }, void 0, true, {
        fileName: "app/shared/ui/DataTable/DataTable.tsx",
        lineNumber: 56,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/shared/ui/DataTable/DataTable.tsx",
      lineNumber: 46,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/shared/ui/DataTable/DataTable.tsx",
    lineNumber: 39,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/shared/ui/DataTable/DataTable.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_c19 = DataTableColumnHeader;
function DataTablePagination({
  table,
  rowSelectionInfo = false
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center justify-between px-2 py-4", children: [
    rowSelectionInfo && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex-1 text-sm text-muted-foreground", children: [
      table.getFilteredSelectedRowModel().rows.length,
      " of",
      " ",
      table.getFilteredRowModel().rows.length,
      " row(s) selected."
    ] }, void 0, true, {
      fileName: "app/shared/ui/DataTable/DataTable.tsx",
      lineNumber: 70,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "ml-auto flex items-center space-x-6 lg:space-x-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-sm font-medium", children: "Rows per page" }, void 0, false, {
          fileName: "app/shared/ui/DataTable/DataTable.tsx",
          lineNumber: 76,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Select, { value: `${table.getState().pagination.pageSize}`, onValueChange: (value) => {
          table.setPageSize(Number(value));
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SelectTrigger, { className: "h-8 w-[70px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SelectValue, { placeholder: table.getState().pagination.pageSize }, void 0, false, {
            fileName: "app/shared/ui/DataTable/DataTable.tsx",
            lineNumber: 81,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/shared/ui/DataTable/DataTable.tsx",
            lineNumber: 80,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SelectContent, { side: "top", children: [10, 20, 30, 40, 50].map((pageSize) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SelectItem, { value: `${pageSize}`, children: pageSize }, pageSize, false, {
            fileName: "app/shared/ui/DataTable/DataTable.tsx",
            lineNumber: 84,
            columnNumber: 46
          }, this)) }, void 0, false, {
            fileName: "app/shared/ui/DataTable/DataTable.tsx",
            lineNumber: 83,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/shared/ui/DataTable/DataTable.tsx",
          lineNumber: 77,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/shared/ui/DataTable/DataTable.tsx",
        lineNumber: 75,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex w-[100px] items-center justify-center text-sm font-medium", children: [
        "Page ",
        table.getState().pagination.pageIndex + 1,
        " of",
        " ",
        table.getPageCount()
      ] }, void 0, true, {
        fileName: "app/shared/ui/DataTable/DataTable.tsx",
        lineNumber: 90,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { variant: "outline", className: "hidden size-8 p-0 lg:flex", onClick: () => table.setPageIndex(0), disabled: !table.getCanPreviousPage(), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "sr-only", children: "Go to first page" }, void 0, false, {
            fileName: "app/shared/ui/DataTable/DataTable.tsx",
            lineNumber: 96,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Icon, { name: "double-arrow-left", size: "sm" }, void 0, false, {
            fileName: "app/shared/ui/DataTable/DataTable.tsx",
            lineNumber: 97,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/shared/ui/DataTable/DataTable.tsx",
          lineNumber: 95,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { variant: "outline", className: "size-8 p-0", onClick: () => table.previousPage(), disabled: !table.getCanPreviousPage(), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "sr-only", children: "Go to previous page" }, void 0, false, {
            fileName: "app/shared/ui/DataTable/DataTable.tsx",
            lineNumber: 100,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Icon, { name: "chevron-left", size: "sm" }, void 0, false, {
            fileName: "app/shared/ui/DataTable/DataTable.tsx",
            lineNumber: 101,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/shared/ui/DataTable/DataTable.tsx",
          lineNumber: 99,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { variant: "outline", className: "size-8 p-0", onClick: () => table.nextPage(), disabled: !table.getCanNextPage(), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "sr-only", children: "Go to next page" }, void 0, false, {
            fileName: "app/shared/ui/DataTable/DataTable.tsx",
            lineNumber: 104,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Icon, { name: "chevron-right", size: "sm" }, void 0, false, {
            fileName: "app/shared/ui/DataTable/DataTable.tsx",
            lineNumber: 105,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/shared/ui/DataTable/DataTable.tsx",
          lineNumber: 103,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { variant: "outline", className: "hidden size-8 p-0 lg:flex", onClick: () => table.setPageIndex(table.getPageCount() - 1), disabled: !table.getCanNextPage(), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "sr-only", children: "Go to last page" }, void 0, false, {
            fileName: "app/shared/ui/DataTable/DataTable.tsx",
            lineNumber: 108,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Icon, { name: "double-arrow-right", size: "sm" }, void 0, false, {
            fileName: "app/shared/ui/DataTable/DataTable.tsx",
            lineNumber: 109,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/shared/ui/DataTable/DataTable.tsx",
          lineNumber: 107,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/shared/ui/DataTable/DataTable.tsx",
        lineNumber: 94,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/shared/ui/DataTable/DataTable.tsx",
      lineNumber: 74,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/shared/ui/DataTable/DataTable.tsx",
    lineNumber: 69,
    columnNumber: 10
  }, this);
}
_c24 = DataTablePagination;
function DataTableViewOptions({
  table
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { variant: "outline", size: "sm", className: "ml-auto hidden h-8 lg:flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Icon, { name: "mixer-horizontal", size: "sm", className: "mr-2" }, void 0, false, {
        fileName: "app/shared/ui/DataTable/DataTable.tsx",
        lineNumber: 122,
        columnNumber: 6
      }, this),
      "View"
    ] }, void 0, true, {
      fileName: "app/shared/ui/DataTable/DataTable.tsx",
      lineNumber: 121,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/shared/ui/DataTable/DataTable.tsx",
      lineNumber: 120,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DropdownMenuContent, { align: "end", className: "w-[150px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DropdownMenuLabel, { children: "Toggle columns" }, void 0, false, {
        fileName: "app/shared/ui/DataTable/DataTable.tsx",
        lineNumber: 127,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DropdownMenuSeparator, {}, void 0, false, {
        fileName: "app/shared/ui/DataTable/DataTable.tsx",
        lineNumber: 128,
        columnNumber: 5
      }, this),
      table.getAllColumns().filter((column) => typeof column.accessorFn !== "undefined" && column.getCanHide()).map((column) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DropdownMenuCheckboxItem, { className: "capitalize", checked: column.getIsVisible(), onCheckedChange: (value) => column.toggleVisibility(!!value), children: column.id }, column.id, false, {
          fileName: "app/shared/ui/DataTable/DataTable.tsx",
          lineNumber: 130,
          columnNumber: 16
        }, this);
      })
    ] }, void 0, true, {
      fileName: "app/shared/ui/DataTable/DataTable.tsx",
      lineNumber: 126,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/shared/ui/DataTable/DataTable.tsx",
    lineNumber: 119,
    columnNumber: 10
  }, this);
}
_c33 = DataTableViewOptions;
function DataTableFacetedFilter({
  column,
  title,
  options
}) {
  const facets = column?.getFacetedUniqueValues();
  const selectedValues = new Set(column?.getFilterValue());
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Popover, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { variant: "outline", size: "sm", className: "h-8 border-dashed", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Icon, { name: "plus-circled", size: "sm", className: "mr-2" }, void 0, false, {
        fileName: "app/shared/ui/DataTable/DataTable.tsx",
        lineNumber: 148,
        columnNumber: 6
      }, this),
      title,
      selectedValues?.size > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Separator, { orientation: "vertical", className: "mx-2 h-4" }, void 0, false, {
          fileName: "app/shared/ui/DataTable/DataTable.tsx",
          lineNumber: 151,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Badge, { variant: "secondary", className: "rounded-sm px-1 font-normal lg:hidden", children: selectedValues.size }, void 0, false, {
          fileName: "app/shared/ui/DataTable/DataTable.tsx",
          lineNumber: 152,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "hidden space-x-1 lg:flex", children: selectedValues.size > 2 ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Badge, { variant: "secondary", className: "rounded-sm px-1 font-normal", children: [
          selectedValues.size,
          " selected"
        ] }, void 0, true, {
          fileName: "app/shared/ui/DataTable/DataTable.tsx",
          lineNumber: 156,
          columnNumber: 36
        }, this) : options.filter((option) => selectedValues.has(option.value)).map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Badge, { variant: "secondary", className: "rounded-sm px-1 font-normal", children: option.label }, option.value, false, {
          fileName: "app/shared/ui/DataTable/DataTable.tsx",
          lineNumber: 158,
          columnNumber: 94
        }, this)) }, void 0, false, {
          fileName: "app/shared/ui/DataTable/DataTable.tsx",
          lineNumber: 155,
          columnNumber: 8
        }, this)
      ] }, void 0, true, {
        fileName: "app/shared/ui/DataTable/DataTable.tsx",
        lineNumber: 150,
        columnNumber: 35
      }, this)
    ] }, void 0, true, {
      fileName: "app/shared/ui/DataTable/DataTable.tsx",
      lineNumber: 147,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/shared/ui/DataTable/DataTable.tsx",
      lineNumber: 146,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(PopoverContent, { className: "w-[200px] p-0", align: "start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Command, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CommandInput, { placeholder: title }, void 0, false, {
        fileName: "app/shared/ui/DataTable/DataTable.tsx",
        lineNumber: 167,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CommandList, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CommandEmpty, { children: "No results found." }, void 0, false, {
          fileName: "app/shared/ui/DataTable/DataTable.tsx",
          lineNumber: 169,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CommandGroup, { children: options.map((option) => {
          const isSelected = selectedValues.has(option.value);
          return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CommandItem, { onSelect: () => {
            if (isSelected) {
              selectedValues.delete(option.value);
            } else {
              selectedValues.add(option.value);
            }
            const filterValues = Array.from(selectedValues);
            column?.setFilterValue(filterValues.length ? filterValues : void 0);
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: cn("mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary", isSelected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Icon, { name: "check", size: "sm" }, void 0, false, {
              fileName: "app/shared/ui/DataTable/DataTable.tsx",
              lineNumber: 183,
              columnNumber: 12
            }, this) }, void 0, false, {
              fileName: "app/shared/ui/DataTable/DataTable.tsx",
              lineNumber: 182,
              columnNumber: 11
            }, this),
            option.icon && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(option.icon, { className: "mr-2 size-4 text-muted-foreground" }, void 0, false, {
              fileName: "app/shared/ui/DataTable/DataTable.tsx",
              lineNumber: 185,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: option.label }, void 0, false, {
              fileName: "app/shared/ui/DataTable/DataTable.tsx",
              lineNumber: 186,
              columnNumber: 11
            }, this),
            facets?.get(option.value) && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "ml-auto flex size-4 items-center justify-center font-mono text-xs", children: facets.get(option.value) }, void 0, false, {
              fileName: "app/shared/ui/DataTable/DataTable.tsx",
              lineNumber: 187,
              columnNumber: 41
            }, this)
          ] }, option.value, true, {
            fileName: "app/shared/ui/DataTable/DataTable.tsx",
            lineNumber: 173,
            columnNumber: 22
          }, this);
        }) }, void 0, false, {
          fileName: "app/shared/ui/DataTable/DataTable.tsx",
          lineNumber: 170,
          columnNumber: 7
        }, this),
        selectedValues.size > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CommandSeparator, {}, void 0, false, {
            fileName: "app/shared/ui/DataTable/DataTable.tsx",
            lineNumber: 194,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CommandGroup, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CommandItem, { onSelect: () => column?.setFilterValue(void 0), className: "justify-center text-center", children: "Clear filters" }, void 0, false, {
            fileName: "app/shared/ui/DataTable/DataTable.tsx",
            lineNumber: 197,
            columnNumber: 10
          }, this) }, void 0, false, {
            fileName: "app/shared/ui/DataTable/DataTable.tsx",
            lineNumber: 196,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/shared/ui/DataTable/DataTable.tsx",
          lineNumber: 193,
          columnNumber: 35
        }, this)
      ] }, void 0, true, {
        fileName: "app/shared/ui/DataTable/DataTable.tsx",
        lineNumber: 168,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/shared/ui/DataTable/DataTable.tsx",
      lineNumber: 166,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/shared/ui/DataTable/DataTable.tsx",
      lineNumber: 165,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/shared/ui/DataTable/DataTable.tsx",
    lineNumber: 145,
    columnNumber: 10
  }, this);
}
_c43 = DataTableFacetedFilter;
var _c19;
var _c24;
var _c33;
var _c43;
$RefreshReg$(_c19, "DataTableColumnHeader");
$RefreshReg$(_c24, "DataTablePagination");
$RefreshReg$(_c33, "DataTableViewOptions");
$RefreshReg$(_c43, "DataTableFacetedFilter");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_layout+/dashboard+/car.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_layout+/dashboard+/car.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
var _s3 = $RefreshSig$();
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_layout+/dashboard+/car.tsx"
  );
  import.meta.hot.lastModified = "1706962583485.701";
}
var meta = () => {
  return [{
    title: "Car expenses | GeekConsole"
  }, {
    name: "description",
    content: "Track your car expenses with ease"
  }];
};
var handle = {
  breadcrumb: "Car Expenses",
  getSitemapEntries: () => null
};
function CarRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex w-full flex-col gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { asChild: true, className: "w-3/12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: "new", children: "Add new expense" }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/car.tsx",
        lineNumber: 134,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/car.tsx",
        lineNumber: 133,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CarSpendingsTable, {}, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/car.tsx",
        lineNumber: 137,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/dashboard+/car.tsx",
      lineNumber: 132,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/car.tsx",
      lineNumber: 140,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/dashboard+/car.tsx",
    lineNumber: 131,
    columnNumber: 10
  }, this);
}
_c20 = CarRoute;
function DeleteExpense({
  id
}) {
  _s();
  const actionData = useActionData();
  const isPending = useIsPending();
  const [form] = useForm({
    id: "deleteExpense",
    lastResult: actionData?.result
  });
  const submit = (event) => {
    form.onSubmit(event);
    document.dispatchEvent(new KeyboardEvent("keydown", {
      key: "Escape"
    }));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form, { method: "POST", ...getFormProps(form), onSubmit: submit, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AuthenticityTokenInput, {}, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/car.tsx",
      lineNumber: 163,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "expenseId", value: id }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/car.tsx",
      lineNumber: 164,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(StatusButton, { type: "submit", name: "intent", value: DELETE_EXPENSE_INTENT, variant: "destructive", status: isPending ? "pending" : form.status ?? "idle", disabled: isPending, className: "w-full max-md:aspect-square max-md:px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Icon, { name: "trash", className: "scale-125 max-md:scale-150", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "max-md:hidden", children: "Delete" }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/car.tsx",
      lineNumber: 168,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/car.tsx",
      lineNumber: 167,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/car.tsx",
      lineNumber: 166,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ErrorList, { errors: form.errors, id: form.errorId }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/car.tsx",
      lineNumber: 171,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/dashboard+/car.tsx",
    lineNumber: 162,
    columnNumber: 10
  }, this);
}
_s(DeleteExpense, "G+LY8oKPtG3PTaudrP2QM73mqkI=", false, function() {
  return [useActionData, useIsPending, useForm];
});
_c25 = DeleteExpense;
var ExpenseDropdownMenu = ({
  spending
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { variant: "ghost", className: "size-8 p-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "sr-only", children: "Open menu" }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/car.tsx",
        lineNumber: 184,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Icon, { name: "more-horizontal", size: "md" }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/car.tsx",
        lineNumber: 185,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/dashboard+/car.tsx",
      lineNumber: 183,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/car.tsx",
      lineNumber: 182,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DropdownMenuContent, { align: "end", className: "w-[150px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DropdownMenuLabel, { children: "Actions" }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/car.tsx",
        lineNumber: 189,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DropdownMenuSeparator, {}, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/car.tsx",
        lineNumber: 190,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: `${spending.id}/edit`, prefetch: "intent", children: "Edit expense" }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/car.tsx",
        lineNumber: 192,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/car.tsx",
        lineNumber: 191,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DropdownMenuSeparator, {}, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/car.tsx",
        lineNumber: 196,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DeleteExpense, { id: spending.id }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/car.tsx",
        lineNumber: 198,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/car.tsx",
        lineNumber: 197,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/dashboard+/car.tsx",
      lineNumber: 188,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/dashboard+/car.tsx",
    lineNumber: 181,
    columnNumber: 10
  }, this);
};
_c34 = ExpenseDropdownMenu;
var columns = [{
  accessorKey: "type",
  header: "Expense Type",
  filterFn: (row, id, value) => {
    return value.includes(row.getValue(id));
  }
}, {
  accessorKey: "date",
  header: ({
    column
  }) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DataTableColumnHeader, { column, title: "Date" }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/car.tsx",
      lineNumber: 215,
      columnNumber: 12
    }, this);
  }
}, {
  accessorKey: "value",
  header: ({
    column
  }) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DataTableColumnHeader, { column, title: "Value" }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/car.tsx",
      lineNumber: 222,
      columnNumber: 12
    }, this);
  },
  cell: ({
    row
  }) => {
    const amount = parseFloat(row.getValue("value"));
    const formatted = new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB"
    }).format(amount);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text-left font-medium", children: formatted }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/car.tsx",
      lineNumber: 232,
      columnNumber: 12
    }, this);
  }
}, {
  accessorKey: "comment",
  header: "Comment"
}, {
  id: "actions",
  cell: ({
    row
  }) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ExpenseDropdownMenu, { spending: row.original }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/car.tsx",
      lineNumber: 242,
      columnNumber: 12
    }, this);
  }
}];
function CarSpendingsTable() {
  _s2();
  const data = useLoaderData();
  const mappedSpendings = data.spendings.map((spending) => {
    const type = data.spendingTypes.find((spendingType) => spendingType.id === spending.typeId);
    invariant(type, "Could not find a spending type");
    const dateStr = format(spending.date, "dd/MM/yyyy");
    return {
      id: spending.id,
      date: dateStr,
      value: spending.value,
      comment: spending.comment,
      type: type.name
    };
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CarExpensesDataTable, { columns, data: mappedSpendings }, void 0, false, {
    fileName: "app/routes/_layout+/dashboard+/car.tsx",
    lineNumber: 260,
    columnNumber: 10
  }, this);
}
_s2(CarSpendingsTable, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c44 = CarSpendingsTable;
function CarExpensesDataTable({
  columns: columns2,
  data
}) {
  _s3();
  const [columnVisibility, setColumnVisibility] = (0, import_react18.useState)({});
  const [columnFilters, setColumnFilters] = (0, import_react18.useState)([]);
  const [sorting, setSorting] = (0, import_react18.useState)([]);
  const table = useReactTable({
    data,
    columns: columns2,
    state: {
      sorting,
      columnVisibility,
      columnFilters
    },
    enableRowSelection: true,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues()
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DataTableToolbar, { table }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/car.tsx",
      lineNumber: 294,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "rounded-md border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Table, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TableHeader, { children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TableRow, { children: headerGroup.headers.map((header) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TableHead, { colSpan: header.colSpan, children: header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext()) }, header.id, false, {
          fileName: "app/routes/_layout+/dashboard+/car.tsx",
          lineNumber: 301,
          columnNumber: 22
        }, this);
      }) }, headerGroup.id, false, {
        fileName: "app/routes/_layout+/dashboard+/car.tsx",
        lineNumber: 299,
        columnNumber: 51
      }, this)) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/car.tsx",
        lineNumber: 298,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TableBody, { children: table.getRowModel().rows?.length ? table.getRowModel().rows.map((row) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TableRow, { "data-state": row.getIsSelected() && "selected", children: row.getVisibleCells().map((cell) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TableCell, { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id, false, {
        fileName: "app/routes/_layout+/dashboard+/car.tsx",
        lineNumber: 309,
        columnNumber: 45
      }, this)) }, row.id, false, {
        fileName: "app/routes/_layout+/dashboard+/car.tsx",
        lineNumber: 308,
        columnNumber: 79
      }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TableCell, { colSpan: columns2.length, className: "h-24 text-center", children: "No results." }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/car.tsx",
        lineNumber: 313,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/car.tsx",
        lineNumber: 312,
        columnNumber: 24
      }, this) }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/car.tsx",
        lineNumber: 307,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/dashboard+/car.tsx",
      lineNumber: 297,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/car.tsx",
      lineNumber: 296,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DataTablePagination, { table }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/car.tsx",
      lineNumber: 321,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/dashboard+/car.tsx",
    lineNumber: 293,
    columnNumber: 10
  }, this);
}
_s3(CarExpensesDataTable, "QMp1jteX14xUejkBxAbHu0NaC1o=", false, function() {
  return [useReactTable];
});
_c53 = CarExpensesDataTable;
function DataTableToolbar({
  table
}) {
  _s4();
  const isFiltered = table.getState().columnFilters.length > 0;
  const data = useLoaderData();
  const mappedSpendingTypes = data.spendingTypes.map((type) => {
    return {
      label: type.name,
      value: type.name
    };
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-1 items-center space-x-2", children: [
      table.getColumn("type") && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DataTableFacetedFilter, { column: table.getColumn("type"), title: "Expense type", options: mappedSpendingTypes }, void 0, false, {
        fileName: "app/routes/_layout+/dashboard+/car.tsx",
        lineNumber: 342,
        columnNumber: 33
      }, this),
      isFiltered && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { variant: "ghost", onClick: () => table.resetColumnFilters(), className: "h-8 px-2 lg:px-3", children: [
        "Reset",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Icon, { name: "cross-2", size: "sm", className: "ml-2" }, void 0, false, {
          fileName: "app/routes/_layout+/dashboard+/car.tsx",
          lineNumber: 345,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_layout+/dashboard+/car.tsx",
        lineNumber: 343,
        columnNumber: 20
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_layout+/dashboard+/car.tsx",
      lineNumber: 341,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DataTableViewOptions, { table }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/car.tsx",
      lineNumber: 349,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_layout+/dashboard+/car.tsx",
    lineNumber: 340,
    columnNumber: 10
  }, this);
}
_s4(DataTableToolbar, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c63 = DataTableToolbar;
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(GeneralErrorBoundary, { statusHandlers: {
    403: () => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "You are not allowed to do that" }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/car.tsx",
      lineNumber: 358,
      columnNumber: 16
    }, this),
    404: () => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Not found" }, void 0, false, {
      fileName: "app/routes/_layout+/dashboard+/car.tsx",
      lineNumber: 359,
      columnNumber: 16
    }, this)
  } }, void 0, false, {
    fileName: "app/routes/_layout+/dashboard+/car.tsx",
    lineNumber: 357,
    columnNumber: 10
  }, this);
}
_c73 = ErrorBoundary;
var _c20;
var _c25;
var _c34;
var _c44;
var _c53;
var _c63;
var _c73;
$RefreshReg$(_c20, "CarRoute");
$RefreshReg$(_c25, "DeleteExpense");
$RefreshReg$(_c34, "ExpenseDropdownMenu");
$RefreshReg$(_c44, "CarSpendingsTable");
$RefreshReg$(_c53, "CarExpensesDataTable");
$RefreshReg$(_c63, "DataTableToolbar");
$RefreshReg$(_c73, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  CarRoute as default,
  handle,
  meta
};
/*! Bundled license information:

@tanstack/table-core/build/lib/index.mjs:
  (**
     * table-core
     *
     * Copyright (c) TanStack
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     *)

@tanstack/react-table/build/lib/index.mjs:
  (**
     * react-table
     *
     * Copyright (c) TanStack
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     *)
*/
//# sourceMappingURL=/build/routes/_layout+/dashboard+/car-KL22ERP3.js.map
