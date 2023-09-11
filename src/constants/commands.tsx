export const COMMANDS = [
  {
    command: "switch-on-1",
    node_path: "SWITCH_01_IS_OPEN",
    state: true,
  },
  {
    command: "switch-on-2",
    node_path: "SWITCH_02_IS_OPEN",
    state: true,
  },
  {
    command: "switch-on-3",
    node_path: "SWITCH_03_IS_OPEN",
    state: true,
  },
  {
    command: "switch-on-4",
    node_path: "SWITCH_04_IS_OPEN",
    state: true,
  },
  {
    command: "switch-off-1",
    node_path: "SWITCH_01_IS_OPEN",
    state: false,
  },
  {
    command: "switch-off-2",
    node_path: "SWITCH_02_IS_OPEN",
    state: false,
  },
  {
    command: "switch-off-3",
    node_path: "SWITCH_03_IS_OPEN",
    state: false,
  },
  {
    command: "switch-off-4",
    node_path: "SWITCH_04_IS_OPEN",
    state: false,
  },
];

export const COMMAND_ALL = [
  {
    command: "switch-on-all",
    node_path: [
      "SWITCH_01_IS_OPEN",
      "SWITCH_02_IS_OPEN",
      "SWITCH_03_IS_OPEN",
      "SWITCH_04_IS_OPEN",
    ],
    state: true,
  },
  {
    command: "switch-off-all",
    node_path: [
      "SWITCH_01_IS_OPEN",
      "SWITCH_02_IS_OPEN",
      "SWITCH_03_IS_OPEN",
      "SWITCH_04_IS_OPEN",
    ],
    state: false,
  },
];
