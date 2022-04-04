export interface ScreenWrapperProps {
  children: React.ReactNode;
  isLoading?: boolean;
  reload?: () => void;
  backgroundColor?: string;
  scroll?: boolean;
}
