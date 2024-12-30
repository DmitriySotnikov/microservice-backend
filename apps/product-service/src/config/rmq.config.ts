export const queues = {
  PRODUCT_SERVICE_QUEUE: 'product-service-queue',
};

export const productEventPatterns = {
  /// Product
  CREATE_PRODUCT: { cmd: 'CREATE_PRODUCT' },
  DELETE_PRODUCT: { cmd: 'DELETE_PRODUCT' },
  GET_ALL_PRODUCTS: { cmd: 'GET_ALL_PRODUCTS' },
  GET_PRODUCT_BY_ID: { cmd: 'GET_PRODUCT_BY_ID' },
  UPDATE_PRODUCT: { cmd: 'UPDATE_PRODUCT' },
};
