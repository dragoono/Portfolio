#!/bin/sh

{
  echo "BACKEND_URL='$BACKEND_URL'"
  echo "NODE_ENV='$NODE_ENV'"
  echo "BASE_URL='$BASE_URL'"
} >> .env
