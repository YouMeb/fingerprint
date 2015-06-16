# fingerprint

辨認為登入使用者身分，依據使用者瀏覽器特徵產生一個獨特的字串當作使用者 id 替代資料。

```javascript
var fp = Fingerprint()
  .use('fetch')
  .use('canvas')
  .use('plugins')
  .use('platform')
  .use('language')
  .use('cpuClass')
  .use('fontList')
  .use('userAgent')
  .use('indexedDB')
  .use('sendBeacon')
  .use('colorDepth')
  .use('doNotTrack')
  .use('localStorage')
  .use('timezoneOffset')
  .get();
```

## API

### .use(plugin)

plugin 可以是預設的 plugin 名稱，或是一個 `Function`，或是一個有 `.plugin()` method 的 `Object`。

```javascript
Fingerprint()
  .use('canvas')
  .use(function () {
    return 'xxx';
  });
```

### .get()

產生 fingerprint

```javascript
var fp = Fingerprint()
  .use('canvas')
  .get();
```

## 開發

```bash
$ git clone git@github.com:YouMeb/fingerprint.git
```

產生 standalone 檔案

```bash
$ make build
```
