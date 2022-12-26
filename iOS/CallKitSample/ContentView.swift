//
//  ContentView.swift
//  CallKitSample
//

import SwiftUI

struct ContentView: View {
    @EnvironmentObject var viewModel: ViewModel

    var body: some View {
        VStack {
            Button("End Call") {
                viewModel.callModel.EndCall()
            }
        }
        .padding()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
