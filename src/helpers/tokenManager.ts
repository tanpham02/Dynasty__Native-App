import AsyncStorage from '@react-native-async-storage/async-storage';

import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, USER_ID_KEY } from '@/constants';

class TokenManager {
  private accessToken: string | null = null;
  private refreshToken: string | null = null;
  private userId: string | null = null;
  public initialized: boolean = false;
  private static instance: TokenManager | null = null;

  // khởi tạo nơi lưu trữ
  private constructor() {
    this.initialize();
  }

  public static getInstance(): TokenManager {
    if (!TokenManager.instance) {
      TokenManager.instance = new TokenManager();
    }
    return TokenManager.instance;
  }

  public async initialize(): Promise<void> {
    if (this.initialized) {
      return;
    }

    // Fetch the access token from AsyncStorage if it hasn't been fetched already
    this.accessToken = (await AsyncStorage.getItem(ACCESS_TOKEN_KEY)) || '';
    this.refreshToken = (await AsyncStorage.getItem(REFRESH_TOKEN_KEY)) || '';
    this.initialized = true;
  }

  public getAccessToken(): string | null {
    return this.accessToken;
  }

  public async setAccessToken(newAccessToken: string): Promise<void> {
    this.accessToken = newAccessToken;
    await AsyncStorage.setItem(ACCESS_TOKEN_KEY, newAccessToken);
  }

  public getUserId(): string | null {
    return this.userId;
  }

  public async setUserId(newUserId: string): Promise<void> {
    this.userId = newUserId;

    await AsyncStorage.setItem(USER_ID_KEY, newUserId);
  }

  public getRefreshToken(): string | null {
    return this.refreshToken;
  }

  public async setRefreshToken(newRefreshToken: string): Promise<void> {
    this.refreshToken = newRefreshToken;

    await AsyncStorage.setItem(REFRESH_TOKEN_KEY, newRefreshToken);
  }
}

export default TokenManager;
