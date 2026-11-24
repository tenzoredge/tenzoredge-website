import { ClipboardList, AppWindow, Plug, Zap } from 'lucide-react';
import ServiceTemplate, { ServicePageContent } from '../../components/ServiceTemplate';
import ProcessFlow from '../../components/ProcessFlow';
import { WorkflowTransformation } from '../../components/illustrations/BusinessDiagrams';

/* One order's journey, shown at each stage of transformation. */
const stages = [
  { title: 'Disconnected', text: 'An order arrives by phone and is written down, then typed into a spreadsheet.' },
  { title: 'Digitized', text: 'The order is captured once, in a simple digital form.' },
  { title: 'Connected', text: 'It checks stock and updates inventory and the customer record automatically.' },
  { title: 'Automated', text: 'Approval, invoice and dispatch notice are triggered without re-keying.' },
  { title: 'Visible', text: 'Managers see orders, stock and cash in one live dashboard.' },
];

const content: ServicePageContent = {
  key: 'business',
  seo: {
    title: 'Business Solutions & Digital Transformation | Tenzor Edge',
    description:
      'Workflow digitization, business application design, system integration and process automation that turn manual, disconnected operations into connected, visible ones.',
  },
  headline: (
    <>
      Turn manual work into <span className="text-brand-edge-red">connected</span> operations.
    </>
  ),
  intro:
    'We digitize the workflows your team runs every day, connect the applications you already use, and automate the steps that slow you down.',
  heroVisual: <WorkflowTransformation />,
  problem: {
    heading: 'Growth exposes manual processes',
    text: 'Spreadsheets, email and phone calls work — until volume grows. Then the same data is typed three times and no one has the full picture.',
    points: [
      { title: 'Double entry everywhere', text: 'Orders, stock and invoices re-keyed between systems, with errors to match.' },
      { title: 'Applications that don’t talk', text: 'Accounting, inventory and CRM each hold a different version of the truth.' },
      { title: 'No live view of the business', text: 'Reports are assembled by hand and are out of date when they arrive.' },
    ],
  },
  solution: {
    heading: 'Five steps from manual to visible',
    intro: 'Follow a single customer order through the transformation. The same pattern applies to inventory, procurement, finance and customer service.',
    visual: <ProcessFlow steps={stages} tone="dark" emphasis={2} />,
  },
  capabilities: {
    heading: 'What we deliver',
    groups: [
      { icon: ClipboardList, title: 'Workflow digitization', items: ['Process mapping', 'Digital forms & approvals', 'Role-based interfaces'] },
      { icon: AppWindow, title: 'Business applications', items: ['Requirements & solution design', 'Selecting or building the right app', 'Delivery oversight'] },
      { icon: Plug, title: 'System integration', items: ['API & integration design', 'ERP, CRM & payment connections', 'Data synchronisation'] },
      { icon: Zap, title: 'Process automation', items: ['Automated approvals & notifications', 'Reconciliation & matching', 'Exception handling'] },
    ],
  },
  approach: [
    { title: 'Map the workflow', text: 'Walk through how work really moves between people and systems.' },
    { title: 'Specify the solution', text: 'Clear requirements and integration design your developers can build from.' },
    { title: 'Build & integrate', text: 'Configure, connect and automate — with specialists where needed.' },
    { title: 'Test & roll out', text: 'User acceptance testing, training and a controlled go-live.' },
  ],
  outcomes: [
    'Data entered once, used everywhere.',
    'Less time on repetitive admin, fewer errors.',
    'Faster order-to-cash and procurement cycles.',
    'A live view of operations across teams and branches.',
  ],
  related: ['consulting', 'infrastructure'],
  cta: {
    title: 'Which process costs your team the most time?',
    text: 'Start there. We’ll show you what it would take to digitize, connect and automate it.',
  },
};

export default function BusinessSolutionsDigitalTransformation() {
  return <ServiceTemplate c={content} />;
}
