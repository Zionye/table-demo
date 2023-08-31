const dataFields = [
  {
    prop: "id",
    label: "ID",
    type: "text",
  },
  {
    prop: "type",
    label: "任务类型",
    type: "select",
    source: "taskTypeList",
  },
  {
    prop: "status",
    label: "完成状态",
    type: "select",
    source: "finishStatusList",
  },
];

export default dataFields;
