export interface SocialUserInfo {
    social_type: string;
    social_id: string;
    type_model: number;
    name: string;
    avatar: string;
    email: string;
  }
  export interface Profile {
    id: number;
    email: string;
    active: number;
  }
  
  export interface LoginResponse {
    message: string;
    access_token: string;
    expires_at: string;
    profile: Profile;
  }
  
  export interface LoginRootResponse {
    success: boolean;
    code: number;
    locale: string;
    message: string;
    data: LoginResponse;
    show_alert: boolean;
  }