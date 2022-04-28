export interface accountInterface {
  token: string;
  userProfile: any;
  dataUser: any;
  localLang: string;
  listTextSearched: any;
}
export interface ChatState {
  conversationListState: {
    isLoading: boolean;
    isLoadMore: boolean;
    error: any;
    isLastPage: boolean;
  };
  conversationDetailState: {
    isLoading: boolean;
    isLoadMore: boolean;
    error: any;
    isLastPage: boolean;
  };
}
