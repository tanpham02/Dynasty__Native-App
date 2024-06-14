
#!/bin/bash

# Define the path to the android directory and local.properties file
LOCAL_PROPERTIES_FILE="./android/local.properties"

# Define the content to be written into local.properties
SDK_DIR="/Users/phamvantan/Library/Android/sdk"
LOCAL_PROPERTIES_CONTENT="sdk.dir=${SDK_DIR}"

# Check if the local.properties file exists
if [ ! -f "$LOCAL_PROPERTIES_FILE" ]; then
    echo "$LOCAL_PROPERTIES_CONTENT" > "$LOCAL_PROPERTIES_FILE"
fi






