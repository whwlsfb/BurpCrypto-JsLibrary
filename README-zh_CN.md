# BurpCrypto-JsLibrary

BurpCrypto-JsLibrary 是 [BurpCrypto](https://github.com/whwlsfb/BurpCrypto) 官方确认在ExecJs模块里可正常使用的Js库，该库无需手动下载，可在插件的后续版本中在线载入。

[English](./README.md) | 简体中文
# 📑 项目结构

项目中的 `lib` 文件夹是用于保存所有JS库文件的文件夹，如果您要贡献您测试通过的库，则需要将库文件全部放入该文件夹内。

packages.yaml 是所有库的索引文件，每一个库都将对应该文件中的一段配置信息，用户将通过该文件找到想要下载的库。

### 配置结构如下：
```yaml
- name: MD5                                     # 库的名字，唯一的
  description: MD5 Message-Digest Algorithm     # 库的描述信息
  author: Whwlsfb(https://github.com/whwlsfb/)  # 作者信息 
  engine:                                       # 您测试通过的并且推荐使用的JS引擎，可写多个，目前可用的引擎有：[Rhino, JreBuiltIn, HtmlUnit]
    - Rhino
  path:                                         # 您的JS库在本项目中的路径，可写多个。将按照顺序载入。
    - lib/md5.js
  functionCase:                                 # JS库的函数列表，用户将通过该信息直接插入函数。
    - functionName: md5
      useCase: |                                # $PARM$ 是用户在代码编辑器中选中的文字，将会被`useCase`替换.
        md5($PARM$);
  example: |                                    # 该代码库的使用示例.
    md5('123456');
    > e10adc3949ba59abbe56e057f20f883e
```

# 💪 Contributions

BurpCrypto-JsLibrary 目前主要由BurpCrypto的作者和社区贡献者维护。非常欢迎任何贡献者提供支持，您可以通过提PR来贡献您的代码，审核通过后所有用户均可获得您的帮助，若使用过程中出现问题也欢迎提出。
