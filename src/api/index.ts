import { Prefix, Get, useAdapter } from 'dequester';
import adapter from 'dequester/src/adapters/axios';

useAdapter(adapter);

@Prefix('http://localhost:8000')
class BaseReq {
  @Get('/a')
  test() {
    return {
      a: 1,
    };
  }
}

export default new BaseReq();
