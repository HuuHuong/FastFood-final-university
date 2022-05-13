export interface accountInterface {
  isFirst: boolean;
  token: string;
  userProfile: any;
  dataUser: any;
  localLang: string;
  listTextSearched: any;
  listCart: any;
  listOrder: [];
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
