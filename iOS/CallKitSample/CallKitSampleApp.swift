//
//  CallKitSampleApp.swift
//  CallKitSample
//

import SwiftUI

@main
struct CallKitSampleApp: App {
    @UIApplicationDelegateAdaptor(ViewModel.self) var viewModel

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environmentObject(viewModel)
        }
    }
}
