#!/bin/bash

# Backend Environment Variables Setup Script
# Generated from Vly for Git Sync
# Run this script to set up your Convex backend environment variables

echo 'Setting up Convex backend environment variables...'

# Check if Convex CLI is installed
if ! command -v npx &> /dev/null; then
    echo 'Error: npx is not installed. Please install Node.js and npm first.'
    exit 1
fi

echo "Setting JWKS..."
npx convex env set "JWKS" -- "{\"keys\":[{\"use\":\"sig\",\"kty\":\"RSA\",\"n\":\"wSxWpT9_jMNvB--N-oF7-R8Odsfv0Iso7PeQmm8r6n7-MytO-NHndy0JpZ1Ss38a1kdpiVKF5MM-zHOMnsSo9WKOZNi1um9fFB8Do7Igl1wVaooj3KpKZeLC7p0-mxMUcgq47q-RsrTGwS5CPv_fXuZwFlUiBv-_bKcqP8MSRC_Q_b3rXQVNhnZGjlbNSf3KP_AFksV_HnUHkTFln8j3Kyya-STsCYknfBTSVJhMONERXGvZ5tZwHOubIrPzTnxb_zfbA9ysGRsN-7BupIMmawisO9BQi-7PL363wx9Qh1possIpXs0IJNqC1A5rg61jotXNPiW6NOgi2Pb-ZSExUQ\",\"e\":\"AQAB\"}]}"

echo "Setting JWT_PRIVATE_KEY..."
npx convex env set "JWT_PRIVATE_KEY" -- "-----BEGIN PRIVATE KEY----- MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDBLFalP3+Mw28H 7436gXv5Hw52x+/Qiyjs95Cabyvqfv4zK0740ed3LQmlnVKzfxrWR2mJUoXkwz7M c4yexKj1Yo5k2LW6b18UHwOjsiCXXBVqiiPcqkpl4sLunT6bExRyCrjur5GytMbB LkI+/99e5nAWVSIG/79spyo/wxJEL9D9vetdBU2GdkaOVs1J/co/8AWSxX8edQeR MWWfyPcrLJr5JOwJiSd8FNJUmEw40RFca9nm1nAc65sis/NOfFv/N9sD3KwZGw37 sG6kgyZrCKw70FCL7s8vfrfDH1CHWmiywilezQgk2oLUDmuDrWOi1c0+Jbo06CLY 9v5lITFRAgMBAAECggEAAbHg5LxE4zhHvhsU9NC0BMCIAPTKHttJtaKKa0B0cy9A DbTgkYBN9pa3kfNqaVbBJoYj3+eQcyxfXa3Z2v7AuL5vn2TjW0pk3ClVf9ctQAa3 zWJ+5A2+b1xo92z7wqKNOF7ttnJl5dp+L+22+RSHoi6FZzzB+qu9wzdIQJz2iRCa aci8Qhbxx+ck2ViEB5NNt5mxWil4Cjj4HCOOIk1nJCUrzissdjhp2sWeme/dHnQJ +EkjLviES3Px2FGU6/QJG0CYzSU5OT/B6WjbjjF/TBCFfutomT0edc/VFkVopBT1 t7ZQaZ8Jdke0oLlGisdVXQ+meyrFsZmrdB3nc+UXwQKBgQD16fXeNNLu8Y+rX2c5 8yVSxsWF49BIMFzL1sAXI5QSuaE4nYB3qDVBLBNkw+6uAhL6BROi93z40UVHz0Qn iAfIzCCXEyOy2BL/isVyzncq3841TxVTHB4rPOfGJF/c+Y5+KDF/u8cjF/bc5CMQ IulgeAkIopcEm0OPK5tQBLCtyQKBgQDJGJzYswOt5fa+lSxnON4fzukSq3nMqRT4 AdOUAKRxx1UW9whZC+bJvG1zGusKQrFvy3+hSzKdJwkH94gtCiW+s+QKnzyX/Hn1 4TchqCp79ilL/M0DYbGb9ulapTSVLAbGLfIcFiJaAFk6AOFxnV7ifZqph9rnTHVc Hrq0QQgLSQKBgECIKtsq5YeKoHcKTB5q7gpw2vittcSb3F4pdrMbxQm86M/glQvR elgl5tj0ibfkF3LAzkxfwc3RrOqRO4NcMR7CYnMCtMWD6khg9DuSbrczj/txS1lJ 8ajLDM90UCu+2WPFzGeGsVVGPqPswj7DypZkKYq4kATHcc0qVlGDSZHxAoGBAJ8V RnczXrTCGGl6Tw81cJsPL1iiqI8cL0dnAn6x52VPAGRTdpojDScIVjlZ0Rhj3ESJ YuUxPNAPolhYHLUssuFjJAK3J9NAWycFTHzmsP0xpkfDrFeBgGTWdpJL4QYlNxKu JDrN080JO4zkR3R+vyJDpQd6PtT9qlX+xUp1q6xpAoGAZHLkCVDpHXFrOKfFGaMk 6sEDl/F1ZzN2KwdiCsNV4ifyZ5S9Qva7igOPl49aLPIx/xTiYwJwgB6QaIgWo9tj TyLTECAvIGbtDrfennVdmTlAq5XDGbCtcW1pzeegRAQcivOI9zqe5qq6tUyNGdAR ouzjo1SmeI8FbDElx+WftL8"

echo "Setting SITE_URL..."
npx convex env set "SITE_URL" -- "http://localhost:5173"

echo "Setting VLY_APP_NAME..."
npx convex env set "VLY_APP_NAME" -- "Vizo Creative"

echo "✅ All backend environment variables have been set!"
echo "You can now run: pnpm dev:backend"
