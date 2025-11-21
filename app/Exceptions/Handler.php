<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Auth\AuthenticationException;

class Handler extends ExceptionHandler
{
    protected $dontReport = [
        //
    ];

    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    public function render($request, Throwable $e)
    {
        if ($e instanceof TokenInvalidException) {
            return response()->json(['error' => 'Token is Invalid'], 401);
        }

        if ($e instanceof TokenExpiredException) {
            return response()->json(['error' => 'Token is Expired'], 401);
        }

        if ($e instanceof JWTException) {
            return response()->json(['error' => 'Token not provided'], 401);
        }

        return parent::render($request, $e);
    }

    protected function unauthenticated($request, AuthenticationException $exception)
    {
        if ($request->is('api/*') || $request->expectsJson()) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthenticated. Please provide a valid token.',
                'error' => 'Token missing or invalid'
            ], 401);
        }

        return redirect()->guest(route('login'));
    }
} 