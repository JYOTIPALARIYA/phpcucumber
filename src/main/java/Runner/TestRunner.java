package Runner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;

import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "D://eclipseworkspace/phpcucumber/src/main/java/feature/contacts.feature"
		,glue= {"StepDefinition"},
		format= {"pretty","html:test-output"}
		,dryRun=false,
				strict=true,
		monochrome=true // displays console o/p in readable format
		)
public class TestRunner {
	

}
