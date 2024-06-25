class CustomAPIError extends Error {
    message: string;
    code: number;
    status?: string;
  
    constructor(message: string, code: number, status?: string) {
      super(message);
      this.code = code;
      this.status = status;
    }
  }
  
  const createCustomError = (message: string, code: number) => {
    return new CustomAPIError(message, code);
  };
  
  
  
  
  export { createCustomError, CustomAPIError };
  