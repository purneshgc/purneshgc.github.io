---
title: "TryHackMe: Greenhouse"
date: 2026-08-02
summary: "An SSRF bug in a Flask image-fetching feature leaks an internal API key, which turns into full file read on the box."
platform: "TryHackMe"
tags: ["web", "ssrf", "flask", "file disclosure"]
difficulty: "Easy"
image: "/writeups/gh.png"
---

Greenhouse is a small Flask app that lets users submit a URL to "photograph" — the app fetches the URL server-side and returns the image.

## Initial Enumeration

The photo-fetch feature accepts an arbitrary URL, which is a strong signal for **Server-Side Request Forgery**. Pointing it at `http://169.254.169.254/` (the cloud metadata service) confirms the server will fetch internal addresses on our behalf.

## Leaking the API Key

The metadata endpoint returns an internal API key used by the app to talk to an admin service running on `localhost:5000`. That admin service has a file-read endpoint that isn't exposed externally — but is reachable once we have the key.

## Getting the Flag

Chaining the SSRF through the admin service's file-read endpoint, we read `/home/greenhouse/flag.txt` directly off the box without ever getting a shell.

## Lessons

- Any feature that fetches a user-supplied URL server-side is worth testing for SSRF, especially against cloud metadata addresses.
- Internal-only services are not a security boundary if something public-facing can be tricked into relaying requests to them.
