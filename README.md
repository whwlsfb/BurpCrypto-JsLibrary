# BurpCrypto-JsLibrary

BurpCrypto-JsLibrary is [BurpCrypto](https://github.com/whwlsfb/BurpCrypto) officially confirms the supported JS library,  it can be imported online directly from the BurpCrypto.

# 📑 Project structure

The `lib` folder is the unified storage directory of the JS library, you need to put all JS components in this folder.

packages.yaml is the plug-in index of this project. each JS library corresponds to a yaml configuration in the file.

Example
```yaml
- name: MD5                                     # Library name, unique 
  author: Whwlsfb(https://github.com/whwlsfb/)  # Author info 
  engine:                                       # You tested and recommanded engine, multiple, such as [Rhino, JreBuiltIn, HtmlUnit]
    - Rhino
  path:                                         # JS file list, path in this project, will be loaded in order.
    - lib/md5.js
  functionCase:                                 # Js Function list, how to call the JS library you provided.
    - functionName: md5
      useCase: |                                # $PARM$ is content selected by the user will be replaced with `useCase`.
        md5($PARM$);
  example: |                                    # Code example of JS Library.
    md5('123456');
    > e10adc3949ba59abbe56e057f20f883e
```

# 💪 Contributions

BurpCrypto-JsLibrary is powered by BurpCrypto author and major contributions from the community. we welcome any contributors to provide valuable JS libraries. you can You can initiate Pull-Request contributions to your js code

