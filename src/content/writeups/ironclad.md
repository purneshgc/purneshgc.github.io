---
title: "TryHackMe: IronClad"
date: 2026-09-20
summary: "A white-box challenge against a Java Spring app — an exposed Actuator endpoint leaks credentials, then a SQL injection gets us the rest of the way."
platform: "TryHackMe"
tags: ["web", "java", "sqli", "actuator"]
difficulty: "Medium"
image: "/writeups/ironclad.png"
roomUrl: ""
---

IronClad is a white-box room: the source code for a Java Spring application is provided up front, so most of the work is reading code rather than blind fuzzing.

## Initial Enumeration

A port scan turns up a web service on `8080` alongside the usual SSH port. Browsing the source, an exposed Spring Boot **Actuator** endpoint (`/actuator/env`) is reachable without authentication and dumps the application's environment variables — including a database connection string.

## First Flag

Using the leaked database credentials to log in as a low-privileged application user is enough to reach the first flag, tucked into that user's profile page.

## Second Flag

Digging through a search feature in the source reveals a raw string-concatenated SQL query. Classic SQL injection in the search parameter returns rows outside the intended table, including the second flag.

## Third Flag

Chaining the SQL injection to read the `users` table surfaces a password hash for an admin-level account. Cracking it offline and logging in as that user unlocks the admin panel, where the third flag sits in a config page.

## Lessons

- Actuator endpoints are a very common misconfiguration in Spring apps — always check `/actuator` paths on a Spring target.
- White-box rooms reward reading the code methodically before trying anything on the running app.
