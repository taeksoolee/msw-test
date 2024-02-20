# msw (mock-service-worker)
> for mock api

## env
- parcel bundler

```sh
npm i msw # 설치
npx msw init ./public/ # worker 파일을 public 아래 경로에 생성한다. 생성된 파일은 root에 static 배포 해야한다.
```

## memo
- browser worker layer에서 mock api를 요청한다. 또한 jest와 같은 node 환경에서도 사용 가능하다.
- node 20으로는 설치할때 오류 발생해서 14 버전으로 테스트 하였다.