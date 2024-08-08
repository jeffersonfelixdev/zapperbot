#!/bin/bash

pnpm -r exec rm -rf node_modules
pnpm -r exec rm -rf .turbo
pnpm -r exec rm -rf .next
pnpm -r exec rm -rf dist
rm -rf node_modules
rm -rf .turbo
