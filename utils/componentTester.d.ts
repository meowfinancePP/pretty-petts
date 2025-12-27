export declare const testComponentInIsolation: <T extends React.ComponentType<any>>(
  Component: T
) => Promise<{
  accessibilityIssues: any[];
  layoutIssues: any[];
  styleIssues: any[];
}>;
