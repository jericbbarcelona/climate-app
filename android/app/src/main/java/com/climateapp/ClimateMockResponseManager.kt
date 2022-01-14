package com.climateapp

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.io.IOException
import java.io.InputStream


class ClimateMockResponseManager(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "ClimateMockResponseManager"
    }

    @ReactMethod
    fun getClimateResponse(promise: Promise) {
        try {
            val inputStream: InputStream = reactApplicationContext.assets.open("mock/climate.json")
            val size: Int = inputStream.available()
            val buffer = ByteArray(size)
            inputStream.read(buffer)
            val resultJsonString = String(buffer)
            promise.resolve(resultJsonString)
        } catch (e: IOException) {
            e.printStackTrace()
        }
    }
}